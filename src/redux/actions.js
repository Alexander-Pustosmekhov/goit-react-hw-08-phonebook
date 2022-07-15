import types from './types';
import { nanoid } from 'nanoid';

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    name,
    number,
    id: nanoid(),
  },
});

const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

const filterContact = name => ({
  type: types.FILTER,
  payload: name,
});

export default { addContact, deleteContact, filterContact };
