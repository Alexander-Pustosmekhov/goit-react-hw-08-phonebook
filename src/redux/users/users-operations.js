import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from 'redux/axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const userRegistration = createAsyncThunk(
  'users/userRegistration',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const user = { name, email, password };
      const result = await axios.post('/users/signup', user);
      token.set(result.data.token);
      return result.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userLogin = createAsyncThunk(
  'users/userLogin',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const user = { email, password };
      const result = await axios.post('/users/login', user);
      token.set(result.data.token);
      return result.data;
    } catch (error) {
      return rejectWithValue(error);
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
      rejectWithValue(error);
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
    } catch (error) {}
  }
);

const userOperations = {
  userRegistration,
  userLogin,
  userLogout,
  fetchCurrentUser,
};
export default userOperations;
