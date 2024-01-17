import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const PostWrapper = styled.div`
  height: 100%;
`;

export const EmptyPostTitle = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  margin-left: 1rem;
  color: ${theme.colors.gray};
  font-size: ${theme.size.medium};
  font-weight: ${theme.fontWeight.bold};
`;

export const EmptyResultWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  color: ${theme.colors.gray};
  text-align: center;
  line-height: 2rem;
  padding-top: 4rem;
`;

export const EmptyResultText = styled.p`
  color: ${theme.colors.gray};
`;
