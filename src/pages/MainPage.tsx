import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

import BottomNavBar from '@/components/BottomNavBar/BottomNavBar';
import ErrorFallback from '@/components/Common/ErrorFallback';
import ModalContainer from '@/components/Common/Modal/ModalContainer';
import TitleHeader from '@/components/Common/TitleHeader';

export default function MainPage() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense>
          <TitleHeader />
          <Outlet />
          <ModalContainer />
        </Suspense>
      </ErrorBoundary>
      <BottomNavBar />
    </>
  );
}
