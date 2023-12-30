import styled from '@emotion/styled';

const IntroductionContainer = styled.div<{ introductionLength: number }>`
  display: flex;
  flex-direction: ${({ introductionLength }) =>
    introductionLength > 16 ? 'column' : 'none'};
  margin-top: 10px;
  align-items: start;
  height: 100px;
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

const IntroductionInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

interface PropsIntroductionEditor {
  isEditing: boolean;
  introduction: string;
  onEditButtonClick: () => void;
  onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  placeholderText: string;
  buttonText: string;
}

export default function UserIntroductionEditor({
  isEditing,
  onFormSubmit,
  inputRef,
  placeholderText,
  onInputChange,
  introduction,
  onEditButtonClick,
  buttonText,
}: PropsIntroductionEditor) {
  console.log(introduction.length);
  return (
    <>
      {isEditing ? (
        <IntroductionForm onSubmit={onFormSubmit}>
          <IntroductionInput
            ref={inputRef}
            placeholder={placeholderText}
            value={introduction}
            type="text"
            onChange={onInputChange}
          />
          <IntroductionButton isEditing={isEditing}>완료</IntroductionButton>
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
