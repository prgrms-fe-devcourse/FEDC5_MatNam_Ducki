import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { INPUT_VALIDATION } from '@/constants/validation';
import { useSignIn } from '@/hooks/useAuth';
import { HookFormInputListProps } from '@/types/input';

import HookFormInput from '../Common/HookFormInput';
import { FormWrapper, SigninButton } from './style';

interface SigninValues {
  email: string;
  password: string;
}

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SigninValues>();

  const navigate = useNavigate();

  const navigateToMainPage = () => {
    navigate('/');
  };

  const handleSignInSuccess = () => {
    navigateToMainPage();
    alert('로그인 되었어요!');
  };

  const { mutate } = useSignIn({ onSuccess: handleSignInSuccess });

  const onSubmit: SubmitHandler<SigninValues> = (signInInput) => {
    mutate(signInInput);
  };

  const signinInputList: HookFormInputListProps<SigninValues> = [
    {
      name: 'email',
      required: true,
      placeholder: '이메일을 입력해 주세요.',
      type: 'email',
      validation: INPUT_VALIDATION.EMAIL,
    },
    {
      name: 'password',
      required: true,
      placeholder: '비밀번호를 입력해 주세요.',
      type: 'password',
    },
  ];

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      {signinInputList.map((props) => (
        <div key={props.name}>
          <HookFormInput register={register} errors={errors} {...props} />
        </div>
      ))}
      <SigninButton type="submit" isValid={isValid}>
        로그인
      </SigninButton>
    </FormWrapper>
  );
}
