import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const DirectMessagePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

export const DirectMessageTitle = styled.span`
  font-size: 2rem;
  font-weight: ${theme.fontWeight.semiBold};
`;
