import { createSlice } from "@reduxjs/toolkit";
import { login } from "../thunks/authThunk";
import jwt_decode from "jwt-decode";

interface User {
  id: number;
  username: string;
  permissions: string[];
}

function decodeAccessToken(accessToken: string): User {
  try {
    const decoded: User = jwt_decode(accessToken);
    return decoded
  } catch (error) {
    console.error(error);
    return {
      id: 0, 
      username: '', 
      permissions: [], 
    };
  }
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  status: "pending" | "fulfilled" | "rejected" | null;
  error: string | undefined;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  status: null,
  error: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.status = null;
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "pending";
        state.error = undefined;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.accessToken = action.payload.access;
        state.refreshToken = action.payload.refresh;
        state.error = undefined;

        const decodedUser = decodeAccessToken(action.payload.access);
        state.user = decodedUser;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
