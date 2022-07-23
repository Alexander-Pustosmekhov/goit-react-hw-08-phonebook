import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/users/users.selector';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, redirect = '/login' }) {
  const isLogedIn = useSelector(getIsLoggedIn);
  return isLogedIn ? children : <Navigate to={redirect} replace />;
}
