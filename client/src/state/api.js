import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  reducerPath: "NftApi",
  tagTypes: [
    "UploadImage",
    "DalleImage",
    "MidJourneyImage",
    "MidJourneyVersionImage",
  ],
  endpoints: (builder) => ({
    getTwitterImage: builder.mutation({
      query: ({ data }) => ({
        url: "twitter/getImage",
        method: "POST",
        body: data,
      }),
      providesTags: ["UploadImage"],
    }),
    getDalleImage: builder.mutation({
      query: ({ data }) => ({
        url: "openai/dalle",
        method: "POST",
        body: data,
      }),
      providesTags: ["DalleImage"],
    }),
    getMidJourneyImage: builder.mutation({
      query: ({ data }) => ({
        url: "midjourney/image",
        method: "POST",
        body: data,
      }),
      providesTags: ["MidJourneyImage"],
    }),
    getMidJourneyImageVersion: builder.mutation({
      query: ({ data }) => ({
        url: "midjourney/imageVersion",
        method: "POST",
        body: data,
      }),
      providesTags: ["MidJourneyImageVersion"],
    }),
  }),
});

export const {
  useGetTwitterImageMutation,
  useGetDalleImageMutation,
  useGetMidJourneyImageMutation,
  useGetMidJourneyImageVersionMutation,
} = api;
