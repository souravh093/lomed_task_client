import { baseApi } from "../api/baseApi";

const connectDataApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getConnectData: builder.query({
      query: () => "/connectData",
    }),
  }),
});

export const { useGetConnectDataQuery } = connectDataApi;
