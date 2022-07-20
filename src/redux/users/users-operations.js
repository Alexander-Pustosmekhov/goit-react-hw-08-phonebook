import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const userRegistration = createAsyncThunk(
  'users/fetchUser',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const user = { name, email, password };
      const result = await axios.post('/users/signup', user);
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default userRegistration;
