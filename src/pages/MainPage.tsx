import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

import BottomNavBar from '@/components/BottomNavBar';
import ErrorFallback from '@/components/Common/ErrorFallback';
import ModalContainer from '@/components/Common/Modal/ModalContainer';

export default function MainPage() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense>
          <Outlet />
          <ModalContainer />
        </Suspense>
      </ErrorBoundary>
      <BottomNavBar />
    </>
  );
}
