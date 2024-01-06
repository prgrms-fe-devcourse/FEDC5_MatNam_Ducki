import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

import {
  DEFAULT_HEIGHT,
  DONE_BUTTON_TEXT,
  INTRODUCE_LENGTH_LIMIT,
} from '@/constants/profile';
import { theme } from '@/styles/Theme';
import { PropsIntroductionEditor } from '@/types/profile';

import HookFormInput from '../Common/HookFormInput';

const IntroductionContainer = styled.div<{ introductionLength: number }>`
  display: flex;
  flex-direction: ${({ introductionLength }) =>
    introductionLength > INTRODUCE_LENGTH_LIMIT ? 'column' : 'none'};
  align-items: center;
  gap: 2rem;
  height: ${({ introductionLength }) =>
    introductionLength
      ? DEFAULT_HEIGHT * (introductionLength / INTRODUCE_LENGTH_LIMIT)
      : DEFAULT_HEIGHT};
`;
const IntroductionForm = styled.form`
  display: flex;
  height: 2rem;
  gap: 1.5rem;
`;
const IntroductionButton = styled.button<{ isEditing: boolean }>`
  border: 0.1rem solid
    ${({ isEditing }) => (isEditing ? theme.colors.primary : '#ccc')};
  border-radius: 6px;
  padding: 0.1rem;
  background-color: ${({ isEditing }) =>
    isEditing ? theme.colors.primary : '#f3efef'};
  color: ${({ isEditing }) => (isEditing ? 'white' : '#777777;')};
  width: 2.5rem;
  height: 2rem;
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
            style={{ height: '2rem' }}
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
