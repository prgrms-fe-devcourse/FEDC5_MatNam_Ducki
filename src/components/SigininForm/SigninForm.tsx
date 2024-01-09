import { SubmitHandler, useForm } from 'react-hook-form';

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
