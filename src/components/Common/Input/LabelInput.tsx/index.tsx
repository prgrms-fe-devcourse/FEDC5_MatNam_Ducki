import { FieldValues } from 'react-hook-form';

import { HookFormInputProps } from '@/types/input';

import HookFormInput from '../../HookFormInput';
import { labelInputStyle } from './style';

/**
 *
 * @summary name, register props 필수. 자세한 사용법은 `SignupInput.tsx` 참고 부탁드립니다.
 * @descripotion HTML input의 모든 props 또한 (placeholder 등) prop으로 받을 수 있습니다.
 * @param name - useForm에서 사용되는 value의 key (API 필드와 통일하기) 예) email, password
 * @param register - useForm의 register 함수
 * @param label - optional) input 좌측에 위치한 text label. 예) 이메일, 비밀번호
 * @param type - optional) text | email | password. default = text
 * @param required - optional) 필수 입력 값인지 체크
 * @param errors - optional) 미입력 체크를 위함. useForm의 formState 객체 내부의 errors 값
 * @param validation - optional) validate 패턴과 errorMessage를 지정
 */
export default function LabelInput<T extends FieldValues>({
  ...props
}: HookFormInputProps<T>) {
  return <HookFormInput css={labelInputStyle} isErrorCheck {...props} />;
}
