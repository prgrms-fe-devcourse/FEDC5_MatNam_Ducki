import { useNavigate } from 'react-router-dom';

import CTAButton from '@/components/Common/Button/CTAButton';

import { NotFoundImg, NotFoundPageContainer } from './style';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const navigateToMainPage = () => {
    navigate('/');
  };

  const handleNavigate = () => {
    navigateToMainPage();
  };

  return (
    <NotFoundPageContainer>
      <NotFoundImg src="/images/notFoundPageImg.png" />
      <CTAButton onClick={handleNavigate}>메인 페이지로 돌아가기</CTAButton>
    </NotFoundPageContainer>
  );
}
