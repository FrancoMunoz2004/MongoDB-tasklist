import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const resAppi = createApi({
  reducerPath: "resAppi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  tagTypes: ["refreshTaks", "refreshPostTaks"],
  keepUnusedDataFor: 3,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: (token) => ({
        url: "/tasks",
        method: "GET",
        headers: { "Content-Type": "application/json", token },
      }),
      providesTags: ["refreshTaks"],
    }),
    getTasksCompletas: builder.query({
      query: (token) => ({
        url: "/tasks/completadas",
        method: "GET",
        headers: { "Content-Type": "application/json", token },
      }),
      providesTags: ["refreshTaks"],
    }),
    getTasksIncompletas: builder.query({
      query: (token) => ({
        url: "/tasks/incompletas",
        method: "GET",
        headers: { "Content-Type": "application/json", token },
      }),
      providesTags: ["refreshTaks"],
    }),
    PostTasks: builder.mutation({
      query: ({ dataTasks, token }) => ({
        url: "/agregar/tasks",
        method: "POST",
        headers: { "Content-Type": "application/json", token },
        body: dataTasks,
      }),
      invalidatesTags: ["refreshTaks", "refreshPostTaks"],
    }),
    DeleteTasks: builder.mutation({
      query: ({ _id, token }) => ({
        url: `/${_id}`,
        method: "DELETE",
        headers: { "Content-Type": "application/json", token },
      }),
      invalidatesTags: ["refreshTaks", "refreshPostTaks"],
    }),
    UptdateTasks: builder.mutation({
      query: ({ _id, dataTask, token }) => ({
        url: `/${_id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json", token },
        body: dataTask,
      }),
      invalidatesTags: ["refreshTaks", "refreshPostTaks"],
    }),
    UptestadoTasks: builder.mutation({
      query: ({ _id, dataEstado, token }) => ({
        url: `/estado/${_id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json", token },
        body: dataEstado,
      }),
      invalidatesTags: ["refreshTaks", "refreshPostTaks"],
    }),
    getUserChecked: builder.query({
      query: (dataLogin) => ({
        url: "/user",
        method: "PATCH",
        body: dataLogin,
      }),
    }),
    createUser: builder.mutation({
      query: (newUser) => ({
        url: "/user/agregar",
        method: "POST",
        body: newUser,
      }),
      /* invalidatesTags: ["refreshUsers"], */
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  usePacthUserLoginMutation,
  useGetTasksCompletasQuery,
  useGetTasksIncompletasQuery,
  useCreateUserMutation,
  useGetUserCheckedQuery,
  useGetTasksQuery,
  usePostTasksMutation,
  useDeleteTasksMutation,
  useUptdateTasksMutation,
  useUptestadoTasksMutation,
} = resAppi;
