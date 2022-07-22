import styled from 'styled-components';
import s from './Navigator.module.css';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: #ffffff;
  background-color: teal;
  border: 1px solid #ffffff;
  &.active {
    color: black;
    background-color: #ffffff;
  }
`;

export default function Navigator() {
  return (
    <ul className={s.Navigator__list}>
      <li className={s.Navigator__item}>
        <StyledLink to="/login" className={s.logIn}>
          Autorization
        </StyledLink>
      </li>
      <li className={s.Navigator__item}>
        <StyledLink to="/register" className={s.signUp}>
          Registration
        </StyledLink>
      </li>
    </ul>
  );
}
