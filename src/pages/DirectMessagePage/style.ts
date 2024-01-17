import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const DirectMessagePageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0rem;
`;

export const DirectMessageTitle = styled.span`
  font-size: 2rem;
  font-weight: ${theme.fontWeight.semiBold};
`;
