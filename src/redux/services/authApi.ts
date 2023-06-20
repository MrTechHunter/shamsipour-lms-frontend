import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_PATH }),
  tagTypes: ['Login'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payLoad) => {
        return {
          url: '/auth/login',
          method: 'Post',
          body: payLoad,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
      },
      transformResponse: (response: { token: string; userInfo: { [key: string]: string | number } }) => {
        localStorage.setItem('token', JSON.stringify({ token: response.token }));
        localStorage.setItem('userInfo', JSON.stringify(response.userInfo));
        window.location.href = '/';
        return response;
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
