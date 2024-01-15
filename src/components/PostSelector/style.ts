import styled from '@emotion/styled';

export const SelectorWrapper = styled.div`
  text-align: center;
  margin-top: 3rem;
  display: flex;
  width: 33.2rem;
  border-radius: 1rem;
  height: 4rem;
  align-items: center;
  gap: 0.5rem;
`;

export const Ball = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background-color: black;
  border-radius: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const MyPostsTitle = styled.div<{ isLikesSelected: boolean }>`
  font-size: ${({ isLikesSelected }) => (isLikesSelected ? '1.95rem' : '2rem')};
  color: ${({ isLikesSelected }) => (isLikesSelected ? '#868686' : 'black')};
  font-weight: ${({ isLikesSelected }) =>
    isLikesSelected ? 'normal' : 'bold'};
`;

export const LikesTitle = styled.div<{ isLikesSelected: boolean }>`
  font-size: ${({ isLikesSelected }) => (isLikesSelected ? '2rem' : '1.95rem')};
  color: ${({ isLikesSelected }) => (isLikesSelected ? 'black' : '#868686')};
  font-weight: ${({ isLikesSelected }) =>
    isLikesSelected ? 'bold' : 'normal'};
`;
