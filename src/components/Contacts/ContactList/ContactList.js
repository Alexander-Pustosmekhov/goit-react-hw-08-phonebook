import UserContact from 'components/Contacts/UserContact/UserContact';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts, getFilter } from 'redux/contacts/contacts-selector';

export default function Contacts({ children }) {
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

  return (
    <div className={s.contacts}>
      {children}
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

Contacts.propTypes = {
  children: PropTypes.node.isRequired,
};
