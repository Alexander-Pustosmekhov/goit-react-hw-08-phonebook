import s from './UserMenu..module.css';
import { getName } from 'redux/users/users.selector';
import { useDispatch, useSelector } from 'react-redux';
import userOperations from 'redux/users/users-operations';

const { userLogout } = userOperations;

export default function Navigator() {
  const userName = useSelector(getName);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(userLogout());
  };

  return (
    <div className={s.Navigator}>
      <p className={s.text}>Hello, {userName}</p>
      <button type="button" className={s.button} onClick={handleClick}>
        Log out
      </button>
    </div>
  );
}
