import { useState } from 'react';
import { useDispatch } from 'react-redux';
import userOperations from 'redux/users/users-operations';
import s from './Register.module.css';

const { userRegistration } = userOperations;

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userRegistration({ name, email, password, reset }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          <span className={s.inputName}>Name</span>
          <input
            name="name"
            onChange={onChange}
            value={name}
            type="text"
            required
          />
        </label>
        <label className={s.label}>
          <span className={s.inputName}>Email</span>
          <input
            name="email"
            onChange={onChange}
            value={email}
            type="mail"
            required
          />
        </label>
        <label className={s.label}>
          <span className={s.inputName}>Password</span>
          <input
            name="password"
            onChange={onChange}
            value={password}
            type="password"
            required
          />
        </label>
        <button type="submit" className={s.button}>
          Registration
        </button>
      </form>
    </>
  );
}
