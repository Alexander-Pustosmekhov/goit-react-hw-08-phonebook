import React from 'react';
import s from './UserContact.module.css';
import PropTypes from 'prop-types';

class UserContact extends React.Component {
  render() {
    const { name, number, id, onDelete } = this.props;
    return (
      <li className={s.item}>
        &#128222; {name}: {number}
        <button
          className={s.button}
          type="button"
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </button>
      </li>
    );
  }
}

UserContact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserContact;
