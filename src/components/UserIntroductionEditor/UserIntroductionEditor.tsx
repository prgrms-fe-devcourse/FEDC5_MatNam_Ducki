import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

import { DONE_BUTTON_TEXT } from '@/constants/profile';
import { theme } from '@/styles/Theme';
import { PropsIntroductionEditor } from '@/types/profile';

import HookFormInput from '../Common/HookFormInput';

const Introduction = styled.span`
  margin-top: 0.3rem;
  line-height: 1.3rem;
  width: 16.45rem;
  box-sizing: border-box;
  margin-left: 0.55rem;
`;

const IntroductionWrapper = styled.div<{ introductionLength: number }>`
  display: flex;
  width: 23rem;
  gap: 1.5rem;
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
            style={{
              height: '2rem',
              width: '17rem',
              padding: '0.25rem 0.5rem',
            }}
            onChange={onInputChange}
            register={register}></HookFormInput>
          <IntroductionButton isEditing={isEditing}>
            {DONE_BUTTON_TEXT}
          </IntroductionButton>
        </IntroductionForm>
      ) : (
        <IntroductionWrapper introductionLength={introduction.length}>
          <Introduction>{introduction}</Introduction>
          <IntroductionButton isEditing={isEditing} onClick={onEditButtonClick}>
            {buttonText}
          </IntroductionButton>
        </IntroductionWrapper>
      )}
    </>
  );
}
