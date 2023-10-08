import { apiSlice } from "../api/apiSlice";
import { getFilterJobs } from "./jobSlice";

export const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => ({
        url: "/job/all-jobs",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          dispatch(getFilterJobs(result?.data));
        } catch (error) {
          // Do not any thing , handel error from ui
        }
      },
    }),

    // getJobsByFilter: builder.query({
    //   query: (url) => ({
    //     url: url,
    //   }),
    //   async onQueryStarted(arg, { queryFulfilled, dispatch }) {
    //     try {
    //       const result = await queryFulfilled;

    //       dispatch(getFilterJobs(result?.data));
    //     } catch (error) {
    //       // Do not any thing , handel error from ui
    //     }
    //   },
    // }),
  }),
});

export const { useGetJobsQuery } = jobApi;
