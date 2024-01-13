import { useForm } from 'react-hook-form';

import { DONE_BUTTON_TEXT } from '@/constants/profile';
import { PropsIntroductionEditor } from '@/types/profile';

import HookFormInput from '../Common/HookFormInput';
import {
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
                height: '3.2rem',
                width: '26.2rem',
                padding: '0.4rem 0.8rem',
              }}
              onChange={onInputChange}
              register={register}></HookFormInput>
            <IntroductionButton isEditing={isEditing}>
              {DONE_BUTTON_TEXT}
            </IntroductionButton>
          </IntroductionForm>
          <IntroductionBar />
        </>
      ) : (
        <>
          <IntroductionWrapper introductionLength={introduction.length}>
            <Introduction>{introduction}</Introduction>
            <IntroductionButton
              isEditing={isEditing}
              onClick={onEditButtonClick}>
              {buttonText}
            </IntroductionButton>
          </IntroductionWrapper>
          <IntroductionBar />
        </>
      )}
    </>
  );
}
