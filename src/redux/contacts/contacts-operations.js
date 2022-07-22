import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from 'redux/axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const contacts = await axios.get('/contacts');
      return contacts.data;
    } catch (error) {
      Notify.failure(error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      Notify.failure(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, thunkAPI) => {
    try {
      const contact = { name, number };
      const result = await axios.post('/contacts', contact);
      Notify.success(`Contact ${name} is added`);
      return result.data;
    } catch (error) {
      Notify.failure(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const operations = { fetchContacts, deleteContacts, addContacts };
export default operations;
