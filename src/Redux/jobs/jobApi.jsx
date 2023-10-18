import { apiSlice } from "../api/apiSlice";
import { setJobs } from "./jobSlice";

export const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: ({ currentPage, categories, locations, jobTypes }) => ({
        url: `/job/all-jobs?limit=2&page=${currentPage}&categories=${JSON.stringify(
          categories
        )}&locations=${JSON.stringify(locations)}&jobType=${JSON.stringify(
          jobTypes
        )}`,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          dispatch(
            setJobs({
              jobs: result?.data,
            })
          );
        } catch (error) {
          // Do not any thing , handel error from ui
        }
      },
    }),

    getJobById: builder.query({
      query: (id) => ({
        url: `job/${id}`,
      }),
    }),
  }),
});

export const { useGetJobsQuery, useGetJobByIdQuery } = jobApi;
