import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const ReviewFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 6rem;
`;

export const ReviewTextArea = styled.textarea`
  width: 100%;
  height: 15rem;
  resize: none;
  background: white;
  padding: 1.5rem 1rem;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #4b5563;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  outline: none;
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

export const InputStyle = styled.input`
  border: none;
  border-bottom: 1px solid #f3f2f2;
  padding-bottom: 1rem;
  outline: none;
  &:disabled {
    background: none;
    color: ${theme.colors.gray};
  }
`;

export const TextStyle = styled.span`
  font-size: 1.2rem;
  color: ${theme.colors.gray};
`;
