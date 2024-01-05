import styled from '@emotion/styled';
import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ACCESS_TOKEN_KEY } from '@/constants/api';
import { INPUT_VALIDATION } from '@/constants/validation';
import { signUp } from '@/services/Auth/auth';
import { HookFormInputListProps } from '@/types/input';
import {
  isPasswordContainsSpecialChar,
  isPasswordShort,
} from '@/utils/validation';

import HookFormInput from '../Common/HookFormInput';

interface SignUpValues {
  fullName: string;
  email: string;
  password: string;
  passwordCheck: string;
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 20px;
`;

const SubmitButton = styled.button<{ isValid: boolean }>`
  border-width: 1px;
  border-radius: 4px;
  color: ${({ isValid }) => (isValid ? '#000' : '#ddd')};
  border: 1px solid ${({ isValid }) => (isValid ? '#000' : '#ddd')};
  padding: 6px;
`;

const GuideWrapper = styled.div`
  display: block;
  padding-top: 1rem;
`;

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors, isValid },
  } = useForm<SignUpValues>();

  const navigate = useNavigate();

  const navigateToMainPage = () => {
    navigate('/');
  };

  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      if (data?.token) {
        localStorage.setItem(ACCESS_TOKEN_KEY, data.token);
        navigateToMainPage();
      }
    },
  });

  const onSubmit: SubmitHandler<SignUpValues> = ({
    passwordCheck,
    ...signUpInput
  }) => {
    mutation.mutate(signUpInput);
  };

  const password = watch('password');

  const isPasswordValidated =
    !isPasswordShort(password) && isPasswordContainsSpecialChar(password);

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
          value === getValues('password') || '비밀번호가 일치하지 않습니다.',
      },
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
