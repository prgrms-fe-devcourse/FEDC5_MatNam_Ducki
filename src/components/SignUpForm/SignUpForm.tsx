import styled from '@emotion/styled';
import { SubmitHandler, useForm } from 'react-hook-form';

import { INPUT_VALIDATION } from '@/constants/validation';
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

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<SignupValues>();

  const onSubmit: SubmitHandler<SignupValues> = (data) => console.log(data);

  const signupInputList: HookFormInputListProps<SignupValues> = [
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
      {signupInputList.map((props) => (
        <HookFormInput
          key={props.name}
          register={register}
          errors={errors}
          {...props}
        />
      ))}
      <SignupButton type="submit" isValid={isValid}>
        회원가입
      </SignupButton>
    </FormWrapper>
  );
}
