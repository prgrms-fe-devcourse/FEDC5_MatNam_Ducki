import styled from '@emotion/styled';

import { useSignIn, useSignOut } from '@/hooks/useAuth';
import { useModal } from '@/hooks/useModal';
import { useToast } from '@/hooks/useToast';
import { ModalType } from '@/types/modal';

export default function TestPage() {
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

  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal({ type: ModalType.CHANGE_IMAGE });
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

  const { addToast, addPosition } = useToast();

  return (
    <MainPageWrapper>
      <TestButton onClick={handleSignIn}>테스트 계정 로그인</TestButton>
      <TestButton onClick={handleSignOut}>테스트 계정 로그아웃</TestButton>
      <TestButton onClick={handleOpenModal}>이미지 변경 모달 열기</TestButton>
      <TestButton
        onClick={() => {
          addPosition('bottom-center');
          addToast({ content: '테스트 토스트' });
        }}>
        토스트 테스트
      </TestButton>
    </MainPageWrapper>
  );
}
