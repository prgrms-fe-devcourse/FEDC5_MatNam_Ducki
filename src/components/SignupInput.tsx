import styled from '@emotion/styled';
import { SubmitHandler, useForm } from 'react-hook-form';

import { HookFormInputListProps } from '@/types/input';

import HookFormInput from './Common/HookFormInput';

interface SignupValues {
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

const SignupButton = styled.button<{ isValid: boolean }>`
  border-width: 1px;
  border-radius: 4px;
  color: ${({ isValid }) => (isValid ? '#000' : '#ddd')};
  border-color: ${({ isValid }) => (isValid ? '#000' : '#ddd')};
`;

export default function SignupInput() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignupValues>();

  const onSubmit: SubmitHandler<SignupValues> = (data) => console.log(data);

  const signupInputList: HookFormInputListProps<SignupValues> = [
    {
      label: '이름',
      name: 'fullName',
      required: true,
      placeholder: '이름을 입력해 주세요.',
    },
    {
      label: '이메일',
      name: 'email',
      required: true,
      placeholder: '이메일을 입력해 주세요.',
      type: 'email',
    },
    {
      label: '비밀번호',
      name: 'password',
      required: true,
      placeholder: '비밀번호를 입력해 주세요.',
      type: 'password',
    },
    {
      label: '비밀번호 확인',
      name: 'passwordCheck',
      required: true,
      placeholder: '비밀번호를 다시 입력해 주세요.',
      type: 'password',
    },
  ];

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      {signupInputList.map(({ label, name, required, placeholder, type }) => (
        <HookFormInput
          label={label}
          name={name}
          register={register}
          required={required}
          placeholder={placeholder}
          errors={errors}
          type={type}
        />
      ))}
      <SignupButton type="submit" isValid={isValid}>
        회원가입
      </SignupButton>
    </FormWrapper>
  );
}
