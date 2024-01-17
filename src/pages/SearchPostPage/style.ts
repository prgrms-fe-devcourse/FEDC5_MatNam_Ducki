import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const SearchKeywordWrapper = styled.div`
  display: flex;
`;

export const SearchKeyword = styled.span`
  font-size: 2rem;
  font-weight: 600;
  margin-top: 2rem;
`;

export const SearchPostPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem;
`;

export const EmptyResultWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  text-align: center;
  line-height: 2.5rem;
  transform: translateY(-2rem);
`;

export const EmptyResultText = styled.p`
  color: ${theme.colors.gray};
`;
