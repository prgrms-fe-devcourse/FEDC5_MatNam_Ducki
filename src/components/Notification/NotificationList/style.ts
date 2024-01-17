import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const NotificationListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EmptyConversationWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  color: ${theme.colors.gray};
  text-align: center;
  transform: translateY(-2rem);
`;

export const EmptyConversationText = styled.span``;
