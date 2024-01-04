import styled from '@emotion/styled';
import { FieldValues } from 'react-hook-form';

import { HookFormInputProps } from '@/types/input';

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Input = styled.input`
  border: 1px solid #dadada;
  border-radius: 4px;
  padding: 2px 4px;
`;

/**
 *
 * @summary name, register props 필수. 자세한 사용법은 `SignupInput.tsx` 참고 부탁드립니다.
 * @description react-hook-form을 사용하는 공통 Input 컴포넌트
 * @descripotion HTML input의 모든 props 또한 (placeholder 등) prop으로 받을 수 있습니다.
 * @param name - useForm에서 사용되는 value의 key (API 필드와 통일하기) 예) email, password
 * @param register - useForm의 register 함수
 * @param label - optional) input 좌측에 위치한 text label. 예) 이메일, 비밀번호
 * @param type - optional) text | email | password. default = text
 * @param required - optional) 필수 입력 값인지 체크
 * @param errors - optional) 미입력 체크를 위함. useForm의 formState 객체 내부의 errors 값
 * @param validation - optional) validate 패턴과 errorMessage를 지정
 */
export default function HookFormInput<T extends FieldValues>({
  name,
  register,
  label,
  errors,
  required = false,
  type = 'text',
  validation,
  ...props
}: HookFormInputProps<T>) {
  const inputError = errors && errors[name];

  return (
    <InputWrapper>
      {label && <label htmlFor={name}>{label}</label>}
      <Input
        type={type}
        {...register(name, {
          ...validation,
          required: required && '값을 입력해 주세요.',
        })}
        {...props}
      />
      {inputError && <span>{inputError.message as string}</span>}
    </InputWrapper>
  );
}
