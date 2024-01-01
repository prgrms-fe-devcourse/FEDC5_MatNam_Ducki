import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

export interface HookFormInputProps<T extends FieldValues>
  extends React.ComponentProps<'input'> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  required?: boolean;
  errors?: FieldErrors<T>;
  errorMessage?: string;
  type?: 'email' | 'password' | 'text';
}
