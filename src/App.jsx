import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const TrackerPage = lazy(() => import('./pages/TrackerPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));

import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import SharedLayout from './components/SharedLayout/SharedLayout.jsx';

import './App.css';
import Container from './components/REUSABLE/Container/Container';

function App() {
  return (
    <>
      <SharedLayout>
        <Container>
          <Routes>
            {/* <Route
            path="/tracker"
            element={
              <PrivateRoute redirectTo="/signin">
                <TrackerPage />
              </PrivateRoute>
            }
          /> */}
            {/* <Route
            path="/signup"
            element={
              <RestrictedRoute redirectTo="/tracker">
              <SignUpPage />
              </RestrictedRoute>
            }
          /> */}

            {/* <Route
            path="/signin"
            element={
              <RestrictedRoute redirectTo="/tracker">
                <SignInPage />
              </RestrictedRoute>
            }
          /> */}
            <Route path="/" element={<HomePage />} />
            <Route path="/tracker" element={<TrackerPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
          </Routes>
        </Container>
      </SharedLayout>
    </>
  );
}
export default App;

// Request failed with status code 400 - user exist
