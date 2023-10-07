import { apiSlice } from "../api/apiSlice";

export const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => ({
        url: "/job/all-jobs",
      }),
    }),
  }),
});

export const { useGetJobsQuery } = jobApi;
