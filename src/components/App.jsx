import React from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import Section from './Section/Section';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import s from './App.module.css';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  getFilteredContacts = () => {
    const filteredContacts = [];
    this.state.contacts.forEach(e => {
      if (
        e.name.toLocaleLowerCase().includes(this.state.filter.toLowerCase())
      ) {
        filteredContacts.push(e);
      }
    });
    return filteredContacts;
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  formSubmitHandler = data => {
    if (this.state.contacts.some(e => e.name === data.name)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    const newContact = { name: data.name, number: data.number, id: nanoid() };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  removeContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className={s.contactsBook}>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Contacts
            contacts={contacts}
            filteredContacts={this.getFilteredContacts}
            onDelete={this.removeContact}
          >
            <Filter input={filter} onChange={this.handleChange} />
          </Contacts>
        </Section>
      </div>
    );
  }
}

export default App;
