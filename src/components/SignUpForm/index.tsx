import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { INPUT_VALIDATION } from '@/constants/validation';
import { useSignUp } from '@/hooks/useAuth';
import { HookFormInputListProps } from '@/types/input';
import {
  isPasswordContainsSpecialChar,
  isPasswordShort,
} from '@/utils/validation';

import HookFormInput from '../Common/HookFormInput';
import { FormWrapper, GuideWrapper, SubmitButton } from './style';

interface SignUpValues {
  fullName: string;
  email: string;
  password: string;
  passwordCheck: string;
}

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<SignUpValues>();

  const navigate = useNavigate();

  const navigateToMainPage = () => {
    navigate('/');
  };

  const handleSignUpSuccess = () => {
    navigateToMainPage();
    alert('가입이 완료 되었어요!');
  };

  const { mutate } = useSignUp({ onSuccess: handleSignUpSuccess });

  const onSubmit: SubmitHandler<SignUpValues> = ({
    passwordCheck,
    ...signUpInput
  }) => {
    mutate(signUpInput);
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
      guide: !isPasswordValidated && (
        <GuideWrapper>
          {isPasswordShort(password) && (
            <p> · 8글자 이상으로만 입력할 수 있습니다.</p>
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
      guide: !isPasswordMatched && passwordCheck !== '' && (
        <GuideWrapper>
          <p>비밀번호가 일치하지 않습니다.</p>
        </GuideWrapper>
      ),
    },
  ];

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      {inputList.map((props) => (
        <div key={props.name}>
          <HookFormInput register={register} errors={errors} {...props} />
          {props.guide}
        </div>
      ))}
      <SubmitButton type="submit" isValid={isValid}>
        회원가입
      </SubmitButton>
    </FormWrapper>
  );
}
