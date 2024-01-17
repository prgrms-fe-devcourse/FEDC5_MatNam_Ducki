import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const UserInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const UserName = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;

export const UserId = styled.div`
  font-size: 1.3rem;
  color: ${theme.colors.gray};
`;
