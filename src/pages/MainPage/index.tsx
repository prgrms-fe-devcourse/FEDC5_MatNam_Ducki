import { Suspense, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import BottomNavBar from '@/components/BottomNavBar';
import ErrorFallback from '@/components/Common/ErrorFallback';
import ModalContainer from '@/components/Common/Modal/ModalContainer';
import Settings from '@/components/Common/Settings';
import Spinner from '@/components/Common/Spinner';
import TitleHeader from '@/components/Common/TitleHeader';
import { ACCESS_TOKEN_KEY } from '@/constants/api';
import { useCheckAuthUser } from '@/hooks/useAuth';
import { userAtom } from '@/recoil/user';

import { ContentWrapper, MainPageWrapper, ScrollWrapper } from './style';

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
    <MainPageWrapper>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Spinner />}>
          <TitleHeader />
          <ScrollWrapper>
            <ContentWrapper>
              <Outlet />
            </ContentWrapper>
          </ScrollWrapper>
          <ModalContainer />
        </Suspense>
      </ErrorBoundary>
      <BottomNavBar />
      <Settings />
    </MainPageWrapper>
  );
}
