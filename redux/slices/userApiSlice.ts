import { apiSlice } from "./apiSlice";
const url = "/api/users";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${url}/auth`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${url}`,
        method: "post",
        body: data,
        credentials: "include",
      }),
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: `${url}/logout`,
        method: "post",
        body: data,
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${url}/profile`,
        method: `PUT`,
        data: data,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useUpdateUserMutation,
} = usersApiSlice;
