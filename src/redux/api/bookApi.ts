import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),
  tagTypes: ["books"],
  endpoints: (build) => ({
    getBooks: build.query({
      query: () => `books`,
      providesTags: ["books"],
    }),
    getSingleBook: build.query({
      query: (id) => `books/${id}`,
    }),
    addBook: build.mutation({
      query: (bookData) => ({
        url: `books`,
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["books"],
    }),
    updateBook: build.mutation({
      query: ({ id, bookData }) => ({
        url: `books/${id}`,
        method: "PUT",
        body: bookData,
      }),
      invalidatesTags: ["books"],
    }),
    removeBook: build.mutation({
      query(id) {
        return {
          url: `books/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useRemoveBookMutation,
  useGetSingleBookQuery,
  useUpdateBookMutation,
} = bookApi;
