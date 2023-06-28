import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_PATH }),
  tagTypes: ['courseApi'],
  endpoints: (builder) => ({
    getCourse: builder.mutation({
      query: () => {
        return {
          url: '/course/get-courses',
          method: 'Get',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
      },
      transformResponse: (response: any, arg, meta) => {
        return response;
      },
    }),
  }),
});

export const { useGetCourseMutation } = courseApi;
