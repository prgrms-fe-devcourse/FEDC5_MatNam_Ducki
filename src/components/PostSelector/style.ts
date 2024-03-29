import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const SelectorWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const MyPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem 2rem;
`;

export const MyPostsTitle = styled.div<{ isLikesSelected: boolean }>`
  font-size: ${({ isLikesSelected }) =>
    isLikesSelected ? '1.6rem' : '1.8rem'};
  color: ${({ isLikesSelected }) =>
    isLikesSelected ? theme.colors.gray : 'black'};
  font-weight: ${({ isLikesSelected }) =>
    isLikesSelected ? theme.fontWeight.medium : theme.fontWeight.bold};
  cursor: pointer;
`;

export const LikesTitle = styled.div<{ isLikesSelected: boolean }>`
  font-size: ${({ isLikesSelected }) =>
    isLikesSelected ? '1.8rem' : '1.6rem'};
  color: ${({ isLikesSelected }) =>
    isLikesSelected ? 'black' : theme.colors.gray};
  font-weight: ${({ isLikesSelected }) =>
    isLikesSelected ? theme.fontWeight.bold : theme.fontWeight.medium};
  cursor: pointer;
`;
