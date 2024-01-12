import { useNavigate } from 'react-router-dom';

import SignInForm from '@/components/SignInForm/SignInForm';

import {
  GuideComment,
  GuideContainer,
  SignInPageContainer,
  SignUpButton,
} from './style';

export default function SignInPage() {
  const navigate = useNavigate();

  const navigateToSignUpPage = () => {
    navigate('/signUp');
  };

  const handleCreateAccount = () => {
    navigateToSignUpPage();
  };

  return (
    <SignInPageContainer>
      <SignInForm />
      <GuideContainer>
        <GuideComment>처음이신가요?</GuideComment>
        <SignUpButton onClick={handleCreateAccount}>계정 만들기</SignUpButton>
      </GuideContainer>
    </SignInPageContainer>
  );
}
