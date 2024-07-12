import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const TrackerPage = lazy(() => import('./pages/TrackerPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));

import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import SharedLayout from './components/SharedLayout/SharedLayout.jsx';

import './App.css';

function App() {
  return (
    <>
      <SharedLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/tracker"
            element={
              <PrivateRoute redirectTo="/signin">
                <TrackerPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <RestrictedRoute redirectTo="/tracker">
                <SignUpPage />
              </RestrictedRoute>
            }
          />

          <Route
            path="/signin"
            element={
              <RestrictedRoute redirectTo="/tracker">
                <SignInPage />
              </RestrictedRoute>
            }
          />
        </Routes>
      </SharedLayout>
    </>
  );
}
export default App;

// Request failed with status code 400 - user exist
