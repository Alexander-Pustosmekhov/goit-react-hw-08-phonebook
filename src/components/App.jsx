import Form from './Contacts/Form/Form';
import Section from './Contacts/Section/Section';
import ContactList from './Contacts/ContactList/ContactList';
import Filter from './Contacts/Filter/Filter';
import s from './App.module.css';
import userOperations from 'redux/users/users-operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Login from './Login/Login';
import Register from './Register/Register';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import contactsOperations from 'redux/contacts/contacts-operations';

const { fetchCurrentUser } = userOperations;
const { fetchContacts } = contactsOperations;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      <div className={s.contactsBook}>
        <Section title="Phonebook">
          <Form />
        </Section>
        <Section title="Contacts">
          <ContactList>
            <Filter />
          </ContactList>
        </Section>
      </div>
    </>
  );
}

export default App;
