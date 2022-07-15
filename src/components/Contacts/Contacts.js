import UserContact from 'components/UserContact/UserContact';
import s from './Contacts.module.css';
import { connect } from 'react-redux';

function Contacts({ children, contacts, filter }) {
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

// Contacts.propTypes = {
//   children: PropTypes.node.isRequired,
//   filteredContacts: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

export default connect(mapStateToProps)(Contacts);
