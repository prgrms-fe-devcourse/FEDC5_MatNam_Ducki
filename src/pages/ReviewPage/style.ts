import styled from '@emotion/styled';

export const ReviewContainer = styled.article`
  position: relative;
  background-color: #f3f4f6;
  padding: 2rem;
`;

export const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ReviewTextArea = styled.textarea`
  width: 100%;
  resize: none;
  background: white;
  padding-bottom: 1rem;
  padding-left: 2.5rem;
  padding-top: 1rem;
  font-size: 1.5rem;
  color: #4b5563;
  outline: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: gray;
  }
`;

export const CreateButton = styled.button`
  position: fixed;
  bottom: 8rem;
  right: 6rem;
  height: 4rem;
  width: 4rem;
  transition: none;
  opacity: 1;

  &:disabled {
    opacity: 0.5;
  }
`;
