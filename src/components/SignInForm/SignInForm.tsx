import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { INPUT_VALIDATION } from '@/constants/validation';
import { useSignIn } from '@/hooks/useAuth';
import { HookFormInputListProps } from '@/types/input';

import HookFormInput from '../Common/HookFormInput';
import { FormWrapper, SignInButton } from './style';

interface SignInValues {
  email: string;
  password: string;
}

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInValues>();

  const navigate = useNavigate();

  const navigateToMainPage = () => {
    navigate('/');
  };

  const handleSignInSuccess = () => {
    navigateToMainPage();
    alert('로그인 되었어요!');
  };

  const { mutate } = useSignIn({ onSuccess: handleSignInSuccess });

  const onSubmit: SubmitHandler<SignInValues> = (signInInput) => {
    mutate(signInInput);
  };

  const signInInputList: HookFormInputListProps<SignInValues> = [
    {
      label: '이메일',
      name: 'email',
      required: true,
      placeholder: '이메일을 입력해 주세요.',
      type: 'email',
      validation: INPUT_VALIDATION.EMAIL,
    },
    {
      label: '비밀번호',
      name: 'password',
      required: true,
      placeholder: '비밀번호를 입력해 주세요.',
      type: 'password',
    },
  ];

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      {signInInputList.map((props) => (
        <div key={props.name}>
          <HookFormInput register={register} errors={errors} {...props} />
        </div>
      ))}
      <SignInButton type="submit" isValid={isValid}>
        로그인
      </SignInButton>
    </FormWrapper>
  );
}
