import Form from './Form/Form';
import Section from './Section/Section';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import s from './App.module.css';
import operations from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const { fetchContacts } = operations;

function App() {
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
        <Contacts>
          <Filter />
        </Contacts>
      </Section>
    </div>
  );
}

export default App;
