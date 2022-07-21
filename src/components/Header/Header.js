import { Outlet } from 'react-router-dom';
import s from './Header.module.css';
import Navigator from './Navigator';
import UserMenu from './UserMenu';
import { getIsLoggedIn } from 'redux/users/users.selector';
import { useSelector } from 'react-redux';

export default function Header() {
  const isLogin = useSelector(getIsLoggedIn);

  return (
    <>
      <header className={s.header}>
        {isLogin ? <UserMenu /> : <nav>{<Navigator />}</nav>}
      </header>
      <Outlet />
    </>
  );
}
