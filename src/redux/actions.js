import { createAction } from '@reduxjs/toolkit';

const filterContact = createAction('contacts/filter');

const actionsContact = {
  filterContact,
};

export default actionsContact;
