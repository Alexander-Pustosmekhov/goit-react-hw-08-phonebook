import dataUser from './dataUser.json';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from '../redux/actions';

const items = createReducer(dataUser, {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.filterContact]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
