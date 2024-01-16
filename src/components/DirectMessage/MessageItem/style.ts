import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const MessageItemWrapper = styled.ul``;

export const ReceiverMessageWrapper = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ReceiverMessage = styled.div`
  width: fit-content;
  border-radius: 1rem 1rem 1rem 0;
  padding: 1.2rem;
  background-color: ${theme.colors.lightGray};
`;

export const SenderMessageWrapper = styled.li`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const SenderMessage = styled.div`
  width: fit-content;
  border-radius: 1rem 1rem 0 1rem;
  padding: 1.2rem;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.whitePrimary};
`;
