import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));

import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import SharedLayout from './components/SharedLayout/SharedLayout.jsx';


import './App.css';
import ChartComponent from './components/Statistics/ChartComponent';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from './redux/users/operations.js';
import {
  selectUserError,
  selectUserIsLoggedIn,
} from './redux/users/selectors.js';
import { selectIsError } from './redux/water/selectors.js';

function App() {
  return (
    <>
      <SharedLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {
            <Route
              path="/tracker"
              element={
                <PrivateRoute redirectTo="/signup">
                  <TrackerPage />
                </PrivateRoute>
              }
            >
              <Route path="statistics" element={<ChartComponent />} />
            </Route>
          }
          {
            <Route
              path="/signup"
              element={
                <RestrictedRoute redirectTo="/signin">
                  <SignUpPage />
                </RestrictedRoute>
              }
            />
          }

          {
            <Route
              path="/signin"
              element={
                <RestrictedRoute redirectTo="/tracker">
                  <SignInPage />
                </RestrictedRoute>
              }
            />
          }
          {/* {<Route path="/signin" element={<SignInPage />} />} */}

          {<Route path="/*" element={<HomePage />} />}
        </Routes>
      </SharedLayout>
    </>
  );
}
export default App;
