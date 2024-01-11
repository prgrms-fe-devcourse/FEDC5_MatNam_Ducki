import styled from '@emotion/styled';

export const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const ReviewTextArea = styled.textarea`
  width: 100%;
  height: 15rem;
  resize: none;
  background: white;
  padding: 1.5rem 1rem;
  font-size: 1.5rem;
  color: #4b5563;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  &::placeholder {
    color: gray;
    font-size: 1rem;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;
