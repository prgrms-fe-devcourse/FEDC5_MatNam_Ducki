import styled from '@emotion/styled';

import { useSignIn, useSignOut } from '@/hooks/useAuth';

export default function MainPage() {
  const testUser = {
    email: 'test@gmail.com',
    password: 'aaaaaaaa!',
  };

  const { mutate: signIn } = useSignIn({
    onSuccess: () => alert('test@gmail.com 로그인 완료!'),
  });
  const { mutate: signOut } = useSignOut({
    onSuccess: () => alert('test@gmail.com 로그아웃 완료!'),
  });

  const handleSignIn = () => {
    signIn(testUser);
  };

  const handleSignOut = () => {
    signOut();
  };

  const MainPageWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  `;

  const TestButton = styled.button`
    border: 1px solid black;
    padding: 0.5rem;
    border-radius: 0.3rem;
  `;

  return (
    <MainPageWrapper>
      <TestButton onClick={handleSignIn}>테스트 계정 로그인</TestButton>
      <TestButton onClick={handleSignOut}>테스트 계정 로그아웃</TestButton>
    </MainPageWrapper>
  );
}
