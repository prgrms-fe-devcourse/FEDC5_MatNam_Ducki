import { useForm } from 'react-hook-form';

import { PropsIntroductionEditor } from '@/types/profile';

import HookFormInput from '../Common/HookFormInput';
import {
  EmptyIntroduce,
  Introduction,
  IntroductionBar,
  IntroductionButton,
  IntroductionForm,
  IntroductionWrapper,
} from './style';

export default function UserIntroductionEditor({
  isEditing,
  onFormSubmit,
  placeholderText,
  onInputChange,
  introduction,
  onEditButtonClick,
  buttonText,
}: PropsIntroductionEditor) {
  const { register } = useForm();

  return (
    <>
      {isEditing ? (
        <>
          <IntroductionForm onSubmit={onFormSubmit}>
            <HookFormInput
              name="content"
              placeholder={placeholderText}
              value={introduction}
              type="text"
              style={{
                border: 'none',
                borderBottom: '1px solid #f3f2f2',
              }}
              onChange={onInputChange}
              register={register}></HookFormInput>
            <IntroductionButton>{buttonText}</IntroductionButton>
          </IntroductionForm>
          <IntroductionBar />
        </>
      ) : (
        <>
          <IntroductionWrapper>
            <Introduction>
              {introduction === '' ? (
                <EmptyIntroduce>자기소개를 작성하세요.</EmptyIntroduce>
              ) : (
                introduction
              )}
            </Introduction>
            <IntroductionButton onClick={onEditButtonClick}>
              {buttonText}
            </IntroductionButton>
          </IntroductionWrapper>
          <IntroductionBar />
        </>
      )}
    </>
  );
}
