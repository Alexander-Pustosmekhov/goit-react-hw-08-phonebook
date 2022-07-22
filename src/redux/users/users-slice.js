import { createSlice } from '@reduxjs/toolkit';
import userOperations from './users-operations';

const { userRegistration, userLogin, userLogout, fetchCurrentUser } =
  userOperations;

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [userRegistration.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [userLogin.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [userLogout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [userRegistration.rejected](state, action) {
      state.error = action.payload;
      state.isRefreshing = false;
    },
    [userLogin.rejected](state, action) {
      state.error = action.payload;
      state.isRefreshing = false;
    },
    [userLogout.rejected](state, action) {
      state.error = action.payload;
      state.isRefreshing = false;
    },
    [fetchCurrentUser.rejected](state, action) {
      state.error = action.payload;
      state.isRefreshing = false;
    },
    [userRegistration.pending](state) {
      state.error = null;
      state.isRefreshing = true;
    },
    [userLogin.pending](state) {
      state.error = null;
      state.isRefreshing = true;
    },
    [userLogout.pending](state) {
      state.error = null;
      state.isRefreshing = true;
    },
    [fetchCurrentUser.pending](state) {
      state.error = null;
      state.isRefreshing = true;
    },
  },
});

export default authSlice.reducer;
