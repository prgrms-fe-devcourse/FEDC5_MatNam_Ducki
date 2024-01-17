import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

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
  background-color: ${theme.colors.gray};
`;

export const MyPostsTitle = styled.div<{ isLikesSelected: boolean }>`
  font-size: ${({ isLikesSelected }) =>
    isLikesSelected ? '1.6rem' : '1.8rem'};
  color: ${({ isLikesSelected }) => (isLikesSelected ? '#868686' : 'black')};
  font-weight: ${({ isLikesSelected }) =>
    isLikesSelected ? 'normal' : 'bold'};
  cursor: pointer;
`;

export const LikesTitle = styled.div<{ isLikesSelected: boolean }>`
  font-size: ${({ isLikesSelected }) =>
    isLikesSelected ? '1.8rem' : '1.6rem'};
  color: ${({ isLikesSelected }) => (isLikesSelected ? 'black' : '#868686')};
  font-weight: ${({ isLikesSelected }) =>
    isLikesSelected ? 'bold' : 'normal'};
  cursor: pointer;
`;
