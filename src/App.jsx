import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));

import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import SharedLayout from './components/SharedLayout/SharedLayout.jsx';

import { useDispatch } from 'react-redux';
import { setChosenDate } from './redux/water/slice.js';
import { formatISO } from 'date-fns';

import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setChosenDate(formatISO(new Date())));
  }, [dispatch]);
  return (
    <>
      <SharedLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {
            <Route
              path="/tracker"
              element={
                <PrivateRoute redirectTo="/signin">
                  <TrackerPage />
                </PrivateRoute>
              }
            />
          }
          {
            <Route
              path="/signup"
              element={
                <RestrictedRoute redirectTo="/tracker">
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

          {<Route path="/*" element={<HomePage />} />}
        </Routes>
      </SharedLayout>
    </>
  );
}
export default App;
