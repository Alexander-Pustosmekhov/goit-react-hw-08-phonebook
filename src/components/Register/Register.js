import { useState } from 'react';
import { useDispatch } from 'react-redux';
import userOperations from 'redux/users/users-operations';

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
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            onChange={onChange}
            value={name}
            type="text"
            required
          />
        </label>
        <label>
          Email
          <input
            name="email"
            onChange={onChange}
            value={email}
            type="mail"
            required
          />
        </label>
        <label>
          Password
          <input
            name="password"
            onChange={onChange}
            value={password}
            type="password"
            required
          />
        </label>
        <button type="submit"></button>
      </form>
    </>
  );
}
