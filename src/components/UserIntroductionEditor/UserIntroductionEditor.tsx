import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

import { DONE_BUTTON_TEXT } from '@/constants/profile';
import { theme } from '@/styles/Theme';
import { PropsIntroductionEditor } from '@/types/profile';

import HookFormInput from '../Common/HookFormInput';

const Introduction = styled.span`
  margin-top: 0.48rem;
  line-height: 2.08rem;
  width: 26.32rem;
  box-sizing: border-box;
  margin-left: 0.88rem;
`;

const IntroductionWrapper = styled.div<{ introductionLength: number }>`
  display: flex;
  width: 36.8rem;
  gap: 2.4rem;
`;
const IntroductionForm = styled.form`
  display: flex;
  height: 3.2rem;
  gap: 2.4rem;
`;
const IntroductionButton = styled.button<{ isEditing: boolean }>`
  border: 0.16rem solid
    ${({ isEditing }) => (isEditing ? theme.colors.primary : '#ccc')};
  border-radius: 6px;
  padding: 0.16rem;
  background-color: ${({ isEditing }) =>
    isEditing ? theme.colors.primary : '#f3efef'};
  color: ${({ isEditing }) => (isEditing ? 'white' : '#777777;')};
  width: 4rem;
  height: 3.2rem;
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
              height: '3.2rem',
              width: '27.2rem',
              padding: '0.4rem 0.8rem',
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
