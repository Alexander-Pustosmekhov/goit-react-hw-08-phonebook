import s from './Filter.module.css';
import { useDispatch } from 'react-redux';
import actions from '../../redux/actions';

const { filterContact } = actions;

export default function Filter() {
  // const input = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(filterContact(e.currentTarget.value));

  return (
    <div>
      <p className={s.text}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        // value={input}
        onChange={onChange}
      />
    </div>
  );
}
