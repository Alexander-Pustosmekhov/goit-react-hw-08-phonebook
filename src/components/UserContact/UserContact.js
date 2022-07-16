import s from './UserContact.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import actions from '../../redux/actions';

const { deleteContact } = actions;

export default function UserContact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      &#128222; {name}: {number}
      <button
        className={s.button}
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </li>
  );
}

UserContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
