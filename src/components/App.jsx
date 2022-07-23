import userOperations from 'redux/users/users-operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login/Login';
import Register from './Register/Register';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import Contacts from './Contacts/Contacts';
import PrivateRoute from './Route/PrivateRoute';
import PublicRoute from './Route/PublicRoute';
import { getIsFetchingCurrent } from 'redux/users/users.selector';
import { getName } from '../redux/users/users.selector';

const { fetchCurrentUser } = userOperations;

function App() {
  const isFetching = useSelector(getIsFetchingCurrent);
  const dispatch = useDispatch();
  const userName = useSelector(getName);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetching && (
      <>
        <Header />
        <Routes>
          <Route
            index
            // path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          {!isFetching && (
            <Route path="*" element={userName ? <Contacts /> : <Login />} />
          )}
        </Routes>
      </>
    )
  );
}

export default App;
