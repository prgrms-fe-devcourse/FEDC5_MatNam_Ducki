import styled from '@emotion/styled';
import { SubmitHandler, useForm } from 'react-hook-form';

import { HookFormInputListProps } from '@/types/input';

import HookFormInput from '../Common/HookFormInput';

interface SigninValues {
  email: string;
  password: string;
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 20px;
`;

const SigninButton = styled.button<{ isValid: boolean }>`
  background-color: #ffa500;
  border: none;
  border-radius: 5px;
  padding: 15px 20px;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 10px;
  color: ${({ isValid }) => (isValid ? '#000' : '#ffffff')};
`;

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SigninValues>();

  const onSubmit: SubmitHandler<SigninValues> = (data) => console.log(data);

  const signinInputList: HookFormInputListProps<SigninValues> = [
    {
      name: 'email',
      required: true,
      placeholder: '이메일을 입력해 주세요.',
      type: 'email',
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
        <HookFormInput
          key={props.name}
          register={register}
          errors={errors}
          {...props}
        />
      ))}
      <SigninButton type="submit" isValid={isValid}>
        로그인
      </SigninButton>
    </FormWrapper>
  );
}
