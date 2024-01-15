import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const UserListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;
`;

export const UserItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const PlusMessageButton = styled.button`
  padding: 1rem;
  color: ${theme.colors.primary};
`;
