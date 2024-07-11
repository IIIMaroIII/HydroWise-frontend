import { Suspense } from 'react';
import Loader from '../REUSABLE/Loader/Loader';
import { Toaster } from 'react-hot-toast';

const SharedLayout = ({ children }) => {
  return (
    <>
      <Toaster />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
};

export default SharedLayout;
