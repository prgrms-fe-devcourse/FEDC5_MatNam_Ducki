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

export default function HookFormInput<T extends FieldValues>({
  label,
  name,
  register,
  required,
  errors,
  errorMessage = '값을 입력해 주세요.',
  type = 'text',
  ...props
}: HookFormInputProps<T>) {
  return (
    <InputWrapper>
      {label && <label htmlFor={name}>{label}</label>}
      <Input type={type} {...register(name, { required })} {...props} />
      {errors && errors[name] && <span>{errorMessage}</span>}
    </InputWrapper>
  );
}
