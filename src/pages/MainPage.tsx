import { Suspense, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import BottomNavBar from '@/components/BottomNavBar/BottomNavBar';
import ErrorFallback from '@/components/Common/ErrorFallback';
import ModalContainer from '@/components/Common/Modal/ModalContainer';
import { ACCESS_TOKEN_KEY } from '@/constants/api';
import { useCheckAuthUser } from '@/hooks/useAuth';
import { userAtom } from '@/recoil/user';

export default function MainPage() {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  const setUserData = useSetRecoilState(userAtom);

  const { data: authUser, refetch } = useCheckAuthUser({ isEnabled: false });

  useEffect(() => {
    refetch();
  }, [token]);

  useEffect(() => {
    setUserData(authUser ?? null);
  }, [authUser]);

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
