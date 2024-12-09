import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  username: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  username: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ token: string; username: string }>) {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.username = action.payload.username;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.username = null;
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
