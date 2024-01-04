import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

import {
  DEFAULT_HEIGHT,
  DONE_BUTTON_TEXT,
  INTRODUCE_LENGTH_LIMIT,
} from '@/constants/profile';
import { PropsIntroductionEditor } from '@/types/profile';

import HookFormInput from '../Common/HookFormInput';

const IntroductionContainer = styled.div<{ introductionLength: number }>`
  display: flex;
  flex-direction: ${({ introductionLength }) =>
    introductionLength > INTRODUCE_LENGTH_LIMIT ? 'column' : 'none'};
  margin-top: 10px;
  align-items: start;
  height: ${({ introductionLength }) =>
    introductionLength
      ? DEFAULT_HEIGHT * (introductionLength / INTRODUCE_LENGTH_LIMIT)
      : DEFAULT_HEIGHT};
`;

const IntroductionForm = styled.form`
  display: flex;
  margin-top: 10px;
  height: 28px;
`;

const IntroductionButton = styled.button<{ isEditing: boolean }>`
  border: 1px solid ${({ isEditing }) => (isEditing ? '#f86f03' : '#ccc')};
  margin-left: 15px;
  border-radius: 6px;
  padding: 1px;
  background-color: ${({ isEditing }) => (isEditing ? '#f86f03' : '#f3efef')};
  color: ${({ isEditing }) => (isEditing ? 'white' : '#777777;')};
  width: 36px;
  height: 28px;
`;

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
        <IntroductionForm onSubmit={onFormSubmit}>
          <HookFormInput
            name="content"
            placeholder={placeholderText}
            value={introduction}
            type="text"
            onChange={onInputChange}
            register={register}></HookFormInput>
          <IntroductionButton isEditing={isEditing}>
            {DONE_BUTTON_TEXT}
          </IntroductionButton>
        </IntroductionForm>
      ) : (
        <IntroductionContainer introductionLength={introduction.length}>
          <span>{introduction}</span>
          <IntroductionButton isEditing={isEditing} onClick={onEditButtonClick}>
            {buttonText}
          </IntroductionButton>
        </IntroductionContainer>
      )}
    </>
  );
}
