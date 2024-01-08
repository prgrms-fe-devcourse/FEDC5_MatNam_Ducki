import styled from '@emotion/styled';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 20px;
`;

export const SubmitButton = styled.button<{ isValid: boolean }>`
  border-width: 1px;
  border-radius: 4px;
  color: ${({ isValid }) => (isValid ? '#000' : '#ddd')};
  border: 1px solid ${({ isValid }) => (isValid ? '#000' : '#ddd')};
  padding: 6px;
`;

export const GuideWrapper = styled.div`
  display: block;
  padding-top: 1rem;
`;
