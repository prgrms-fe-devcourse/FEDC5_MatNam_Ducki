import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { INPUT_VALIDATION } from '@/constants/validation';
import { useSignIn } from '@/hooks/useAuth';
import { HookFormInputListProps } from '@/types/input';
import { Toast } from '@/utils/toast.ts';

import CTAButton from '../Common/Button/CTAButton.tsx';
import LabelInput from '../Common/Input/LabelInput.tsx/index.tsx';
import { FormWrapper, InputList, InputListWrapper } from './style.ts';

interface SignInValues {
  email: string;
  password: string;
}

export default function SignInForm() {
  const { register, handleSubmit, formState } = useForm<SignInValues>({
    mode: 'onChange',
  });

  const navigate = useNavigate();

  const navigateToMainPage = () => {
    navigate('/');
  };

  const handleSignInSuccess = () => {
    navigateToMainPage();
    Toast.success('로그인 되었어요!');
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
      isErrorCheck: false,
    },
  ];

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <InputListWrapper>
        {signInInputList.map((props) => (
          <InputList key={props.name}>
            <LabelInput
              register={register}
              errors={formState.errors}
              formState={formState}
              {...props}
            />
          </InputList>
        ))}
      </InputListWrapper>
      <CTAButton>로그인</CTAButton>
    </FormWrapper>
  );
}
