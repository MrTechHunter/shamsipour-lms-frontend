import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './services/authApi';
import { userManagement } from './services/userManagementApi';
import { courseApi } from './services/courseApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userManagement.reducerPath]: userManagement.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, userManagement.middleware, courseApi.middleware]),
});
