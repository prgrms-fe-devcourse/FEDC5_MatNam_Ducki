import CTAButton from '@/components/Common/Button/CTAButton';

import { NotFoundImg, NotFoundPageContainer } from './style';

export default function NotFoundPage() {
  return (
    <NotFoundPageContainer>
      <NotFoundImg src="/images/notFoundPageImg.png" />
      <CTAButton>메인 페이지로 돌아가기</CTAButton>
    </NotFoundPageContainer>
  );
}
