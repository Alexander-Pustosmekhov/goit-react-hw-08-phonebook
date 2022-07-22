import userOperations from 'redux/users/users-operations';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login/Login';
import Register from './Register/Register';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import Contacts from './Contacts/Contacts';
import PrivateRoute from './Route/PrivateRoute';
import PublicRoute from './Route/PublicRoute';
import { getIsFetchingCurrent } from 'redux/users/users.selector';

// const Login = lazy(() => {
//   import('./Login/Login' /* webpackChunkName: "Login" */);
// });

// const Register = lazy(() => {
//   import('./Register/Register' /* webpackChunkName: "Register" */);
// });

// const Header = lazy(() => {
//   import('./Header/Header' /* webpackChunkName: "Header" */);
// });

// const Contacts = lazy(() => {
//   import('./Contacts/Contacts' /* webpackChunkName: "Contacts" */);
// });

const { fetchCurrentUser } = userOperations;

function App() {
  const isFetching = useSelector(getIsFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Routes>
        <Route path="/" element={<Header />}>
          {!isFetching && (
            <>
              <Route
                path="login"
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
            </>
          )}
        </Route>
        {!isFetching && <Route path="*" element={<p>Page not found</p>} />}
      </Routes>
      {/* </Suspense> */}
    </>
  );
}

export default App;
