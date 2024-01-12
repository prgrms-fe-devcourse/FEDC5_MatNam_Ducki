import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';

import { HookFormInputProps } from '@/types/input';

import CheckIcon from './Icons/CheckIcon';
import VisibilityIcon from './Icons/VisibilityIcon';
import VisibilityOffIcon from './Icons/VisibilityOffIcon';

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #dadada;
  border-radius: 1rem;
  padding: 0.2rem 0.4rem;
  outline: none;
`;

const InputErrorWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1rem;
  position: relative;
`;

const InputErrorMessage = styled.span`
  font-size: 1.2rem;
  color: red;
  position: absolute;
  transform: translateY(50%);
`;

export const TogglePasswordButton = styled.button`
  position: absolute;
  top: 0;
  right: 1rem;
  color: #aaaaaa;
`;

const LabelText = styled.label`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.gray};
  padding-bottom: 0.8rem;
`;

const InputErrorCheckButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-0.5rem);
  color: ${({ color }) => color};
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
  formState,
  validation,
  isErrorCheck = false,
  ...props
}: HookFormInputProps<T>) {
  const theme = useTheme();

  const [inputType, setInputType] = useState(type);

  const inputError = errors && errors[name];
  const inputErrorMessage = inputError && (inputError.message as string);

  const handleToggleType = () => {
    const updatedType = inputType === 'password' ? 'text' : 'password';
    setInputType(updatedType);
  };

  const isValid = () => {
    return formState?.dirtyFields[name] && !formState.errors[name];
  };

  return (
    <InputWrapper>
      {label && <LabelText htmlFor={name}>{label}</LabelText>}
      <Input
        type={inputType}
        {...register(name, {
          ...validation,
          required: required && '값이 입력되지 않았어요',
        })}
        autoComplete="off"
        {...props}
      />
      {type === 'password' && (
        <TogglePasswordButton
          type="button"
          tabIndex={-1}
          onClick={handleToggleType}>
          {inputType === 'password' ? (
            <VisibilityIcon />
          ) : (
            <VisibilityOffIcon />
          )}
        </TogglePasswordButton>
      )}
      {formState?.isSubmitted && inputErrorMessage && (
        <InputErrorWrapper>
          <InputErrorMessage>{inputErrorMessage}</InputErrorMessage>
        </InputErrorWrapper>
      )}
      {isErrorCheck && (
        <InputErrorCheckButton
          type="button"
          tabIndex={-1}
          color={isValid() ? theme.colors.secondary : theme.colors.gray}>
          <CheckIcon />
        </InputErrorCheckButton>
      )}
    </InputWrapper>
  );
}
