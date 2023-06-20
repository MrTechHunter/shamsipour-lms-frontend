import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getLocalStorage, clearLocalStorage, setLocalStorage } from './storage';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';
import { ErrorMassage } from './toastMessageHandler';

const mutex = new Mutex();
const baseQuery = fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_PATH });
const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args: any,
  api: any,
  extraOptions: any
) => {
  await mutex.waitForUnlock();
  // todo: result type {data: '', meta: ''} || {error: '', meta}
  let result: any = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await baseQuery(
          {
            url: `/ms-uaa/v1/user/login/refresh`,
            method: 'Get',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              Channel: process.env.REACT_APP_DEFAULT_CHANNEL_KEY,
              token: getLocalStorage('token')?.refreshToken,
            },
          },
          api,
          extraOptions
        );
        if (refreshResult.data) {
          result = await setAuthToken(refreshResult.data, args, api, extraOptions);
        } else {
          clearLocalStorage();
          window.location.href = '/login';
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      const token = getLocalStorage('token')?.accessToken;
      const _args = {
        ...args,
        headers: { ...args.headers, token: token },
      };
      result = await baseQuery(_args, api, extraOptions);
    }
  }
  if (
    result.error &&
    result.error.status !== 200 &&
    result.error &&
    result.error.status !== 201 &&
    result.error &&
    result.error.status !== 401
  ) {
    if (result.error.data) {
      ErrorMassage(result.error.data.meta);
    }
  }
  return result;
};

const setAuthToken = (token: any, args: any, api: any, extraOptions: any) => {
  const _args = {
    ...args,
    headers: { ...args.headers, token: token.data.accessToken },
  };
  setLocalStorage('token', token.data);
  return baseQuery(_args, api, extraOptions);
};

export default baseQueryWithReAuth;
