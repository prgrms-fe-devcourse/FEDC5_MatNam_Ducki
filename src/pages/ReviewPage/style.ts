import styled from '@emotion/styled';

export const ReviewContainer = styled.article`
  position: relative;
  background-color: #f3f4f6; /* bg-gray-100 */
  padding: 1.25rem; /* p-5 */
`;

export const ReviewTextArea = styled.textarea`
  width: 100%;
  resize: none;
  background: white;
  padding-bottom: 0.56rem;
  padding-left: 1.5rem;
  padding-top: 0.5rem;
  font-size: 0.8125rem;
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
  bottom: 2rem;
  right: 1.5rem;
  height: 2.5rem;
  width: 4rem;
  transition: none;
  opacity: 1;

  &:disabled {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    right: 50%;
    transform: translateX(22.5rem);
  }
`;
