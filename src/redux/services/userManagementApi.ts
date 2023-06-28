import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userManagement = createApi({
  reducerPath: 'userManagement',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_PATH }),
  tagTypes: ['userManagement'],
  endpoints: (builder) => ({
    teachersManagement: builder.mutation({
      query: () => {
        return {
          url: '/users/teacher',
          method: 'Get',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
      },
      transformResponse: (response: any, arg, meta) => {
        return response.teacherInfo;
      },
    }),
    studentManagement: builder.mutation({
      query: () => {
        return {
          url: '/users/student',
          method: 'Get',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
      },
      transformResponse: (response: any, arg, meta) => {
        return response.studentInfo;
      },
    }),
  }),
});

export const { useTeachersManagementMutation, useStudentManagementMutation } = userManagement;
