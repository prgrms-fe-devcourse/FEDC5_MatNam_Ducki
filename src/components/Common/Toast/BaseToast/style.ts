import styled from '@emotion/styled';

export const BaseToastWrapper = styled.div<{ backgroundColor?: string }>`
  border-radius: 0.8rem;
  border: 1px solid gray;
  padding: 0.8rem 0.8rem;
  font-size: 1rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
