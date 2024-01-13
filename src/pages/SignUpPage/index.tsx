import { useNavigate } from 'react-router-dom';

import SignUpForm from '@/components/SignUpForm';
import { PATH } from '@/routes/path';

import {
  GuideComment,
  GuideContainer,
  SignUpButton,
  SignUpPageWrapper,
} from './style';

export default function SignUpPage() {
  const navigate = useNavigate();

  const navigateToSignIn = () => {
    navigate(PATH.SIGNIN);
  };

  return (
    <SignUpPageWrapper>
      <SignUpForm />
      <GuideContainer>
        <GuideComment>계정이 있으신가요?</GuideComment>
        <SignUpButton onClick={navigateToSignIn}>로그인</SignUpButton>
      </GuideContainer>
    </SignUpPageWrapper>
  );
}
