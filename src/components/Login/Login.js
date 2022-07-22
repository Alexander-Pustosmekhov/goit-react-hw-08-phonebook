import s from './Login.module.css';
import userOperations from 'redux/users/users-operations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const { userLogin } = userOperations;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
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
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userLogin({ email, password, reset }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          Email
          <input
            className={s.inputName}
            type="mail"
            required
            value={email}
            onChange={onChange}
            name="email"
          />
        </label>
        <label className={s.label}>
          Password
          <input
            className={s.inputName}
            type="password"
            required
            value={password}
            onChange={onChange}
            name="password"
          />
        </label>
        <button type="submit" className={s.button}>
          Log in
        </button>
      </form>
    </>
  );
}
