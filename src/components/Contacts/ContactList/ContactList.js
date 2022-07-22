import UserContact from '../UserContact/UserContact';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import {
  getContacts,
  getFilter,
} from '../../../redux/contacts/contacts-selector';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const filteredContacts = [];
    contacts.forEach(e => {
      if (e.name.toLowerCase().includes(filter.toLowerCase())) {
        filteredContacts.push(e);
      }
    });
    return filteredContacts;
  };

  const filteredContactsArray = getFilteredContacts();
  console.log(contacts);
  console.log(filter);

  return (
    <div className={s.contacts}>
      {filteredContactsArray.length ? (
        <ul className={s.list}>
          {filteredContactsArray.map(e => {
            return (
              <UserContact
                key={e.id}
                id={e.id}
                name={e.name}
                number={e.number}
              />
            );
          })}
        </ul>
      ) : (
        <p className={s.message}>Not found &#128542;</p>
      )}
    </div>
  );
}
