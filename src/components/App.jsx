import Form from './Form/Form';
import Section from './Section/Section';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import s from './App.module.css';

function App() {
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
