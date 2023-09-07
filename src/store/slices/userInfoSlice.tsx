import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginAsync } from '../thunks/userInfoThunk'

interface AuthState {
  user: {
    id: number;
    username: string;
    email: string;
    permissions: string[]; 
  } | null;
  tokens: {
    refresh: string;
    access: string;
  } | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  tokens: null,
  status: 'idle',
  error: null,
};

const userInfoSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState['user']>) => {
      state.user = action.payload;
    },
    setTokens: (state, action: PayloadAction<AuthState['tokens']>) => {
      state.tokens = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = {
          id: action.payload.id,
          username: action.payload.username,
          email: action.payload.email,
          permissions: action.payload.permissions,
        };
        state.tokens = {
          refresh: action.payload.refresh,
          access: action.payload.access,
        };
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  },
});

export const { setUser, setTokens } = userInfoSlice.actions;

export default userInfoSlice.reducer;