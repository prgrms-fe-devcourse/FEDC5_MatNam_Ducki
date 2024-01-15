import styled from '@emotion/styled';

import SearchBar from '@/components/SearchBar';
import { useSignIn, useSignOut } from '@/hooks/useAuth';
import { useModal } from '@/hooks/useModal';
import { PATH } from '@/routes/path';
import { ModalType } from '@/types/modal';

export default function TestPage() {
  const testUser = {
    email: 'test@gmail.com',
    password: 'aaaaaaaa!',
  };

  const testBot = {
    email: 'testbot1@gmail.com',
    password: 'testtest*',
  };

  const { mutate: signIn } = useSignIn({
    onSuccess: () => alert('로그인 완료!'),
  });
  const { mutate: signOut } = useSignOut({
    onSuccess: () => alert('로그아웃 완료!'),
  });

  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal({ type: ModalType.CHANGE_IMAGE });
  };

  const MainPageWrapper = styled.div`
    height: 100%;
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
      <SearchBar disabled navigatePath={PATH.SEARCH.POST} />
      <TestButton onClick={() => signIn(testUser)}>
        테스트 계정 로그인
      </TestButton>
      <TestButton onClick={() => signIn(testBot)}>테스트 봇 로그인</TestButton>
      <TestButton onClick={() => signOut()}>테스트 계정 로그아웃</TestButton>
      <TestButton onClick={handleOpenModal}>이미지 변경 모달 열기</TestButton>
    </MainPageWrapper>
  );
}
