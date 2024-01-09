import styled from '@emotion/styled';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 20px;
`;

export const SigninButton = styled.button<{ isValid: boolean }>`
  background-color: #ffa500;
  border: none;
  border-radius: 5px;
  padding: 15px 20px;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 10px;
  color: ${({ isValid }) => (isValid ? '#000' : '#ffffff')};
`;
