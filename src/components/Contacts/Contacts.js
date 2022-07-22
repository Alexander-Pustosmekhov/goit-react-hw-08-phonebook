import Form from './Form/Form';
import Section from './Section/Section';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import s from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import contactsOperations from 'redux/contacts/contacts-operations';

const { fetchContacts } = contactsOperations;

export default function Contacts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.contactsBook}>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
}
