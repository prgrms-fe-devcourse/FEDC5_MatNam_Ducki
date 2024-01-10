import styled from '@emotion/styled';

export const NotificationItemContainer = styled.li`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem 3rem;
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #e2e2e2;
  background-color: #ffa614;

  &:active {
    transform: scale(1.01);
  }
`;
