import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginAsync } from '../thunks/userInfoThunk'

interface AuthState {
  user: {
    id: number;
    username: string;
    email: string;
    permissions: string[]; 
  } | null;
  token: {
    refresh: string;
    access: string;
  } | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
      user: null, // User data
      token: null, // JWT token
  },
  reducers: {
      setUserAndToken: (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
      },
      clearUserAndToken: (state) => {
          state.user = null;
          state.token = null;
      },
  },
});

export const { setUserAndToken, clearUserAndToken } = authSlice.actions;

export default authSlice.reducer;