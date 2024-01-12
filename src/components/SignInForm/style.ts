import styled from '@emotion/styled';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

export const SignInButton = styled.button<{ isValid: boolean }>`
  background-color: ${(props) => props.theme.colors.secondary};
  border: none;
  border-radius: 0.8rem;
  padding: 1.5rem 2rem;
  font-size: 1.8rem;
  cursor: pointer;
  margin-bottom: 1rem;
  color: ${({ isValid }) => (isValid ? '#000' : '#ffffff')};
`;

export const InputListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
`;

export const InputList = styled.li``;
