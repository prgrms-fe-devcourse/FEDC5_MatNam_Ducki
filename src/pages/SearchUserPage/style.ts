import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const SearchUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 100%;
`;

export const SearchKeyword = styled.span`
  font-size: 2rem;
  font-weight: 600;
  margin-top: 1.2rem;
`;

export const SearchPostPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const EmptyResultWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  text-align: center;
  gap: 1rem;
  transform: translateY(-2rem);
`;

export const EmptyResultText = styled.p`
  color: ${theme.colors.gray};
`;
