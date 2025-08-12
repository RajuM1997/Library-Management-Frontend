import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-lake-two.vercel.app/api/",
  }),
  tagTypes: ["books"],
  endpoints: (build) => ({
    getBorrows: build.query({
      query: () => `borrow`,
    }),
    addBorrow: build.mutation({
      query: (bookData) => ({
        url: `borrow`,
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const { useGetBorrowsQuery, useAddBorrowMutation } = borrowApi;
