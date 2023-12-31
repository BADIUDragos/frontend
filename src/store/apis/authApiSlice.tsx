import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constants/urls';

// Create an API slice
export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/token',
        method: 'POST',
        body: credentials,
      }),
    }),
    // You can add other endpoints for refreshing tokens, etc.
  }),
});

// Export hooks for using the API
export const { useLoginMutation } = authApi;

// Export the API reducer and the autogenerated endpoints
export const { reducer: authApiReducer, endpoints } = authApi;