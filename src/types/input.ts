import {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

/**
 * @summary 사용법: `HookFormInputProps<데이터타입>`
 * @description { key : value } 형태의 데이터 타입을 제네릭으로 넘겨주어야 하는 InputProps
 * @description HTML input의 모든 props 또한 (placeholder 등) prop으로 받을 수 있습니다.
 *
 */
export interface HookFormInputProps<T extends FieldValues>
  extends React.ComponentProps<'input'> {
  name: Path<T>;
  register: UseFormRegister<T>;
  label?: string;
  type?: 'email' | 'password' | 'text';
  required?: boolean;
  errors?: FieldErrors<T>;
  validation?: RegisterOptions;
}

/**
 * @summary 사용법: `HookFormInputListProps<데이터타입>` 자세한 사용법은 `SignupInput.tsx`의 `signupInputList` 참고 부탁드립니다.
 * @description 여러 개의 input이 있을 때 input props를 포함한 object를 배열로 선언하여 map 함수를 통해 한 번에 렌더링 할 때 사용합니다.
 * @description register와 errors는 useForm에서 가져오면 중복 선언할 필요가 없기 때문에 Omit을 통해 props에서 제거하였습니다.
 *
 */
export type HookFormInputListProps<T extends FieldValues> = Omit<
  HookFormInputProps<T>,
  'register' | 'errors'
>[];
