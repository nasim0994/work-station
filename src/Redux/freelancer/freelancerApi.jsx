import { apiSlice } from "../api/apiSlice";

export const freelancerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFreelancers: builder.query({
      query: () => ({
        url: "/freelancer/all-freelancers",
      }),
    }),
  }),
});

export const { useGetFreelancersQuery } = freelancerApi;
