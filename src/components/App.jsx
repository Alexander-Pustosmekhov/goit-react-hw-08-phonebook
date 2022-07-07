import { nanoid } from 'nanoid';
import Form from './Form/Form';
import Section from './Section/Section';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import s from './App.module.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const isFirstRender = useRef(true);

  useEffect(() => {
    const contactsLocal = JSON.parse(localStorage.getItem('contacts'));
    if (contactsLocal) setContacts(contactsLocal);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const getFilteredContacts = () => {
    const filteredContacts = [];
    contacts.forEach(e => {
      if (e.name.toLowerCase().includes(filter.toLowerCase())) {
        filteredContacts.push(e);
      }
    });
    return filteredContacts;
  };

  const handleChange = e => {
    setFilter(e.currentTarget.value);
  };

  const formSubmitHandler = data => {
    if (contacts.some(e => e.name === data.name)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    const newContact = { name: data.name, number: data.number, id: nanoid() };
    setContacts(prev => [...prev, newContact]);
  };

  const removeContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className={s.contactsBook}>
      <Section title="Phonebook">
        <Form onSubmit={formSubmitHandler} />
      </Section>
      <Section title="Contacts">
        <Contacts
          filteredContacts={getFilteredContacts}
          onDelete={removeContact}
        >
          <Filter input={filter} onChange={handleChange} />
        </Contacts>
      </Section>
    </div>
  );
}

export default App;
