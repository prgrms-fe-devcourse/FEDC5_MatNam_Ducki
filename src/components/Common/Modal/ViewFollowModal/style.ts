import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const ViewFollowWrapper = styled.div`
  background-color: ${theme.colors.whitePrimary};
  border-radius: 1.5rem;
  padding: 2rem;
  width: 30rem;
  max-height: 40rem;
  overflow-y: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const UserList = styled.ul`
  list-style: none;
  margin-top: 0.8rem;
`;

export const UserListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  &:last-child {
    border-bottom: none;
  }
`;

export const UserName = styled.span`
  padding-left: 1.2rem;
`;

export const FollowButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const FollowButton = styled.button<{ active: boolean }>`
  width: 6rem;
  height: 3rem;
  background-color: ${(props) =>
    props.active ? theme.colors.primary : theme.colors.gray};
  color: ${theme.colors.whitePrimary};
  font-size: 1.4rem;
  border-radius: 2rem;
  margin-right: 1rem;
  border: none;
  cursor: pointer;
`;

export const NoListMessage = styled.div`
  text-align: center;
  color: ${theme.colors.gray};
  padding: 2rem;
`;
