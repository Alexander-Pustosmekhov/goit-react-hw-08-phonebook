import UserContact from 'components/UserContact/UserContact';
import s from './Contacts.module.css';
import PropTypes from 'prop-types';

function Contacts({ children, filteredContacts, onDelete }) {
  const filteredContactsArray = filteredContacts();
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
                onDelete={onDelete}
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
  filteredContacts: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
