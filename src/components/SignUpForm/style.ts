import styled from '@emotion/styled';

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

export const InputListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 4rem 0;
`;

export const InputList = styled.li``;

export const GuideWrapper = styled.div`
  display: block;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin: 1.5rem 0 0.8rem 0;
  color: ${(props) => props.theme.colors.gray};
`;
