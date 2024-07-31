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
import useAuth from './hooks/useAuth.js';
import MainModal from './components/Modals/Modal/MainModal.jsx';
import Loader from './components/REUSABLE/Loader/Loader.jsx';
import useModals from './hooks/useModals.js';

function App() {
  const { isUserRefreshing } = useAuth();
  // const { changeModal, dispatch } = useModals();

  return isUserRefreshing ? (
    <div>Refreshing the access token of current User</div>
  ) : (
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
            />
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

          {<Route path="/*" element={<HomePage />} />}
        </Routes>
      </SharedLayout>
    </>
  );
}
export default App;
