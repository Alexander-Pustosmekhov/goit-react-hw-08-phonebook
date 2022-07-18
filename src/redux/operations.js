import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://62d57368d4406e52355b2312.mockapi.io';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await axios.get('/contacts');
      return contacts.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const deleteContacts = createAsyncThunk('contacts/deleteContacts', async id => {
  await axios.delete(`/contacts/${id}`);
  return id;
});

const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, phone }) => {
    const contact = { name, phone };
    const result = await axios.post('/contacts', contact);
    return result.data;
  }
);

const operations = { fetchContacts, deleteContacts, addContacts };
export default operations;
