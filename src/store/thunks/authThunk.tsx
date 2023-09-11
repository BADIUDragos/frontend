import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../../constants/urls';


const API_TOKEN_URL = API_URL + '/auth/login'
const API_TOKEN_REFRESH_URL = API_URL + '/auth/refresh'

interface LoginCredentials {
  username: string;
  password: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      const response = await fetch(API_TOKEN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.detail);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const refreshAccessToken = createAsyncThunk(
  "auth/refreshAccessToken",
  async (refreshToken: string, { rejectWithValue }) => {
    try {
      const response = await fetch(API_TOKEN_REFRESH_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.detail);
      }

      const data = await response.json();
      return data.accessToken;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);