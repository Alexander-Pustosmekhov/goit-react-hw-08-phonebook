import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';
import operations from './contacts-operations';

const items = createReducer([], {
  [operations.fetchContacts.fulfilled]: (_, { payload }) => payload,
  [operations.addContacts.fulfilled]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [operations.deleteContacts.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const loading = createReducer(false, {
  [operations.fetchContacts.pending]: () => true,
  [operations.fetchContacts.fulfilled]: () => false,
  [operations.fetchContacts.rejected]: () => false,
  [operations.deleteContacts.pending]: () => true,
  [operations.deleteContacts.fulfilled]: () => false,
  [operations.deleteContacts.rejected]: () => false,
  [operations.addContacts.pending]: () => true,
  [operations.addContacts.fulfilled]: () => false,
  [operations.addContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [operations.fetchContacts.pending]: () => false,
  [operations.fetchContacts.rejected]: (_, { payload }) => payload,
  [operations.deleteContacts.pending]: () => false,
  [operations.deleteContacts.rejected]: (_, { payload }) => payload,
  [operations.addContacts.pending]: () => false,
  [operations.addContacts.rejected]: (_, { payload }) => payload,
  [actions.reset]: () => false,
});

const filter = createReducer('', {
  [actions.filterContact]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter, loading, error });
