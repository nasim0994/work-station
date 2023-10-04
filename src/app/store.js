import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Redux/auth/authSlice";
import { apiSlice } from "../Redux/api/apiSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
