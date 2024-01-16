import { useTheme } from '@emotion/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { INPUT_VALIDATION } from '@/constants/validation';
import { useSignUp } from '@/hooks/useAuth';
import { HookFormInputListProps } from '@/types/input';
import {
  isPasswordContainsSpecialChar,
  isPasswordShort,
} from '@/utils/validation';

import CTAButton from '../Common/Button/CTAButton.tsx';
import LabelInput from '../Common/Input/LabelInput.tsx';
import {
  FormWrapper,
  GuideWrapper,
  InputList,
  InputListWrapper,
} from './style';

interface SignUpValues {
  fullName: string;
  email: string;
  password: string;
  passwordCheck: string;
}

type SignUpSubmitValues = Omit<SignUpValues, 'passwordCheck'>;

export default function SignUpForm() {
  const { register, handleSubmit, watch, formState } = useForm<SignUpValues>({
    mode: 'onChange',
  });

  const { isSubmitted, errors, isValid } = formState;

  const navigate = useNavigate();

  const navigateToMainPage = () => {
    navigate('/');
  };

  const handleSignUpSuccess = () => {
    navigateToMainPage();
    alert('가입이 완료 되었어요!');
  };

  const { mutate } = useSignUp({ onSuccess: handleSignUpSuccess });

  const onSubmit: SubmitHandler<SignUpSubmitValues> = (data) => {
    mutate(data);
  };

  const password = watch('password');
  const passwordCheck = watch('passwordCheck');

  const isPasswordValidated =
    !isPasswordShort(password) && isPasswordContainsSpecialChar(password);

  const isPasswordMatched = password === passwordCheck;

  const inputList: HookFormInputListProps<SignUpValues> = [
    {
      label: '이름',
      name: 'fullName',
      required: true,
      placeholder: '이름을 입력해 주세요.',
      validation: INPUT_VALIDATION.FULLNAME,
    },
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
      validation: INPUT_VALIDATION.PASSWORD,
      guide: !isSubmitted && !isPasswordValidated && (
        <GuideWrapper>
          {isPasswordShort(password) && (
            <p>· 8글자 이상으로만 입력할 수 있습니다.</p>
          )}
          {!isPasswordContainsSpecialChar(password) && (
            <p>· 특수 문자를 반드시 포함해야합니다.</p>
          )}
        </GuideWrapper>
      ),
    },
    {
      label: '비밀번호 확인',
      name: 'passwordCheck',
      required: true,
      placeholder: '비밀번호를 다시 입력해 주세요.',
      type: 'password',
      validation: {
        validate: (value) =>
          value === password || '비밀번호가 일치하지 않습니다.',
      },
      guide: !isSubmitted && !isPasswordMatched && passwordCheck !== '' && (
        <GuideWrapper>
          <p>· 비밀번호가 일치하지 않습니다.</p>
        </GuideWrapper>
      ),
    },
  ];

  const theme = useTheme();

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <InputListWrapper>
        {inputList.map((props) => (
          <InputList key={props.name}>
            <LabelInput
              register={register}
              errors={errors}
              formState={formState}
              {...props}
            />
            {props.guide}
          </InputList>
        ))}
      </InputListWrapper>
      <CTAButton
        backgroundColor={`${
          isValid ? theme.colors.secondary : `${theme.colors.secondary}90`
        }`}>
        회원가입
      </CTAButton>
    </FormWrapper>
  );
}
