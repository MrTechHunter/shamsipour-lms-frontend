import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shamsipour-lms-backend.vercel.app",
  }),
  tagTypes: ["Login"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payLoad) => {
        return {
          url: "/auth/login",
          method: "Post",
          body: payLoad,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
      transformResponse: (response, meta, arg) => {
        localStorage.setItem(
          "token",
          JSON.stringify({ token: response.token })
        );
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ userInfo: response.userInfo })
        );
        window.location.href = "/";
        return response.data;
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
