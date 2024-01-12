import styled from '@emotion/styled';

interface SortOptionProps {
  active: boolean;
}

export const ReviewListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SortOption = styled.div<SortOptionProps>`
  cursor: pointer;
  color: ${(props) => (props.active ? 'black' : 'gray')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  font-size: ${(props) => (props.active ? '1.8rem' : '1.6rem')};
`;
