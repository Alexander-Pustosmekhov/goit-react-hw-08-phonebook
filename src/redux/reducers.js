import dataUser from './dataUser.json';
import { combineReducers } from 'redux';
import types from './types';

// {
//   contacts: {
//     items: [...dataUser],
//     filter: ''
//   }
// }

const items = (state = dataUser, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({ items, filter });
