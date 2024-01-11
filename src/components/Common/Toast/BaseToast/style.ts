import styled from '@emotion/styled';

export const BaseToastWrapper = styled.div<{ backgroundColor?: string }>`
  border-radius: 0.8rem;
  border: 1px solid gray;
  padding: 1rem 1.5rem;
  display: flex;
  gap: 1.5rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
