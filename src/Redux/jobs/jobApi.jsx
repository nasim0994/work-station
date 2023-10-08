import { apiSlice } from "../api/apiSlice";
import { fetchJobs } from "./jobSlice";

export const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: (pageNumber) => ({
        url: `/job/all-jobs?pageNumber=${pageNumber}&limit=2`,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          dispatch(fetchJobs(result?.data));
        } catch (error) {
          // Do not any thing , handel error from ui
        }
      },
    }),

    getFilterJobs: builder.query({
      query: (url) => url,
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          dispatch(fetchJobs(result?.data));
        } catch (error) {
          // Do not any thing , handel error from ui
        }
      },
    }),
  }),
});

export const { useGetAllJobsQuery, useLazyGetFilterJobsQuery } = jobApi;
