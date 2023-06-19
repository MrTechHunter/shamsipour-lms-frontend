import axios from 'axios';
import { History } from './history';
import {
  getLocalStorageWithExpiry,
  setLocalStorageWithExpiry,
  clearLocalStorage,
  setSessionStorageWithExpiry,
  getSessionStorageWithExpiry,
} from './storage';

// todo: add a option to apiCaller configs like as baseUrl
// todo: define two BASE_URL in env file as app and aggrigator
// todo: make one of them as a default base url
// todo: ask about base url path of services from Para

export const apiCaller = (config) => {
  let needToken = true;
  if (config) {
    // needToken is true by default
    needToken = config.needToken === undefined ? true : config.needToken;
  }

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
      Channel: process.env.REACT_APP_DEFAULT_CHANNEL_KEY,
      'Content-Type': 'application/json; charset=UTF-8',
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      Expires: '0',
    },
    responseType: 'json',
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const refreshToken = getLocalStorageWithExpiry('refresh_token') || getSessionStorageWithExpiry('refresh_token');
      const accessToken = getLocalStorageWithExpiry('access_token') || getSessionStorageWithExpiry('access_token');
      if (needToken && !refreshToken && !accessToken) {
        // add accessToken to condition because of reset-password page that doesnt have refresh_token
        History.replace('/login');
        return false;
      }
      if (accessToken && needToken) {
        console.warn('apiCaller line 45', config);
        config.headers['token'] = `${accessToken}`;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error) {
        const refreshToken = getLocalStorageWithExpiry('refresh_token') || getSessionStorageWithExpiry('refresh_token');
        const { response, config, data } = error;
        const originalRequest = config;
        if (
          error &&
          error.response &&
          error.response.status === 401 &&
          originalRequest.url === '/api/route/ms-uaa/v1/user/login/refresh'
        ) {
          History.push('/login');
          return Promise.reject(error);
        }
        const validPages = [
          '/login',
          '/register',
          '/forget-password',
          '/forget-password/verification',
          '/register/verification',
          '/user/reset-password',
          '/user/profile',
        ];
        if (
          !refreshToken &&
          originalRequest &&
          !originalRequest._retry &&
          validPages.indexOf(window.location.pathname) === -1
        ) {
          clearLocalStorage();
          History.push('/login');
        }
        if (refreshToken && error.response.status === 401 && originalRequest && !originalRequest._retry) {
          originalRequest._retry = true;
          console.warn('apiCaller line 92', config);
          console.warn('apiCaller line 93 ERROR =>', error);
          config.headers['token'] = `${refreshToken}`;
          // get new refresh token
          return new Promise(function (resolve, reject) {
            axios
              .get('/api/route/ms-uaa/v1/user/login/refresh', {
                headers: {
                  token: `${refreshToken}`,
                  Channel: 'web',
                },
              })
              .then((tokenRefreshResponse) => {
                if (tokenRefreshResponse.status === 401 || tokenRefreshResponse.status === 404) {
                  History.push('/login');
                  return false;
                }
                setLocalStorageWithExpiry('access_token', tokenRefreshResponse.data.data.accessToken);
                setLocalStorageWithExpiry('refresh_token', tokenRefreshResponse.data.data.refreshToken);
                setSessionStorageWithExpiry('access_token', tokenRefreshResponse.data.data.accessToken);
                setSessionStorageWithExpiry('refresh_token', tokenRefreshResponse.data.data.refreshToken);
                originalRequest.headers['token'] = tokenRefreshResponse.data.data.accessToken;
                resolve(axios(originalRequest));
              })
              .catch((error) => {
                if (error.response.status === 401 || error.response.status === 404) {
                  History.push('/login');
                  return false;
                }
                reject(error);
              });
          });
        }
        if (response) {
          return Promise.reject(response);
        }
        if (data) {
          return Promise.reject(data);
        }
        return Promise.reject(error);
      }
    }
  );

  return axiosInstance;
};
