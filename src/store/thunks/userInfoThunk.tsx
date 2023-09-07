import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../../constants/urls';

interface Credentials {
  username: string;
  password: string;
}

interface LoginResponse {
  refresh: string;
  access: string;
  id: number;
  username: string;
  email: string;
  permissions: string[];
  token: string;
}

export const loginAsync = createAsyncThunk<LoginResponse, Credentials>('auth/login', async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/auth/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail);
    }

    const data: LoginResponse = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});