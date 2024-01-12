import { useNavigate } from 'react-router-dom';

import SignInForm from '@/components/SignInForm';

import {
  GuideComment,
  GuideContainer,
  MainLogo,
  SignInButton,
  SignInPageContainer,
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
      <MainLogo src="/images/mainLogo.png" />
      <SignInForm />
      <GuideContainer>
        <GuideComment>처음이신가요?</GuideComment>
        <SignInButton onClick={handleCreateAccount}>계정 만들기</SignInButton>
      </GuideContainer>
    </SignInPageContainer>
  );
}
