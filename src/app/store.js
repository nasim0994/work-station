import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Redux/auth/authSlice";
import { apiSlice } from "../Redux/api/apiSlice";
import jobSlice from "../Redux/jobs/jobSlice";
import freelancerSlice from "../Redux/freelancer/freelancerSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    jobs: jobSlice,
    freelancers: freelancerSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
