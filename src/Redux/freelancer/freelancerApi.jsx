import { apiSlice } from "../api/apiSlice";
import { setFreelancers } from "./freelancerSlice";

export const freelancerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFreelancers: builder.query({
      query: ({ currentPage, categories, skills }) => ({
        url: `/freelancer/all-freelancers?limit=2&page=${currentPage}&categories=${categories}&skills=${JSON.stringify(
          skills
        )}`,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          dispatch(
            setFreelancers({
              freelancers: result?.data,
            })
          );
        } catch (error) {
          // Do not any thing , handel error from ui
        }
      },
    }),

    getLoggedFreelancers: builder.query({
      query: () => ({
        url: "/freelancer/me",
      }),
    }),

    getExpertFreelancers: builder.query({
      query: () => ({
        url: "/freelancer/expert",
      }),
    }),
  }),
});

export const {
  useGetFreelancersQuery,
  useGetLoggedFreelancersQuery,
  useGetExpertFreelancersQuery,
} = freelancerApi;
