import styled from '@emotion/styled';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const SignInButton = styled.button<{ isValid: boolean }>`
  background-color: #eea734;
  border: none;
  border-radius: 0.8rem;
  padding: 15px 20px;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 10px;
  color: ${({ isValid }) => (isValid ? '#000' : '#ffffff')};
`;

export const InputListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
`;

export const InputList = styled.li``;
