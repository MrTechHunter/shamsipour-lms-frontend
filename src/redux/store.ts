import { configureStore } from '@reduxjs/toolkit';
import { modalSlice } from './reducers/modal';

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
});
