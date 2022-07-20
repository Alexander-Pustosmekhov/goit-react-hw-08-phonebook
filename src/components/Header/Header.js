import { Outlet } from 'react-router-dom';
import s from './Header.module.css';
import Navigator from './Navigator';
import UserMenu from './UserMenu';

export default function Header() {
  return (
    <>
      <header className={s.header}>
        {/* {false ? <nav>{<Navigator />}</nav> : <UserMenu />} */}
        <nav>{<Navigator />}</nav>
        <UserMenu />
      </header>
      <Outlet />
    </>
  );
}
