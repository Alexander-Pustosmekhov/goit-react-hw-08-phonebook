import { createAction } from '@reduxjs/toolkit';

const filterContact = createAction('contacts/filter');

const reset = createAction('contacts/reset');

const actionsContact = {
  filterContact,
  reset,
};

export default actionsContact;
