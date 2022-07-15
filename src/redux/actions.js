import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts.add', (name, number) => {
  return {
    payload: {
      name,
      number,
      id: nanoid(),
    },
  };
});

const deleteContact = createAction('contacts/delete');

const filterContact = createAction('contacts/filter');

const actionsContact = { addContact, deleteContact, filterContact };
export default actionsContact;
