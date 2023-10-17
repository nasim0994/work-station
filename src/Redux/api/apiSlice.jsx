import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://work-station-server.vercel.app/api/v1",
    baseUrl: "http://localhost:5000/api/v1",
    prepareHeaders: async (headers) => {
      const token = localStorage.getItem("WorkStation_jwt");
      if (token) {
        headers.set("Authorization", `bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
