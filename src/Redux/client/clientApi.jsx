import { apiSlice } from "../api/apiSlice";

export const clientApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLoggedClients: builder.query({
      query: () => ({
        url: "/client/me",
      }),
    }),
  }),
});

export const { useGetLoggedClientsQuery } = clientApi;
