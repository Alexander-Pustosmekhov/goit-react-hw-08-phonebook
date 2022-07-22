import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from 'redux/axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const userRegistration = createAsyncThunk(
  'users/userRegistration',
  async ({ name, email, password, reset }, { rejectWithValue }) => {
    try {
      const user = { name, email, password };
      const result = await axios.post('/users/signup', user);
      token.set(result.data.token);
      reset();
      return result.data;
    } catch (error) {
      Notify.failure(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const userLogin = createAsyncThunk(
  'users/userLogin',
  async ({ email, password, reset }, { rejectWithValue }) => {
    try {
      const user = { email, password };
      const result = await axios.post('/users/login', user);
      token.set(result.data.token);
      reset();
      return result.data;
    } catch (error) {
      Notify.failure(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const userLogout = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('users/logout');
      token.unset();
    } catch (error) {
      Notify.failure(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const fetchCurrentUser = createAsyncThunk(
  'users/fetchCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      Notify.failure(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userOperations = {
  userRegistration,
  userLogin,
  userLogout,
  fetchCurrentUser,
};
export default userOperations;
