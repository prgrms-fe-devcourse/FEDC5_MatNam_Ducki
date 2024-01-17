import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const EmptyPostTitle = styled.div`
  color: ${theme.colors.gray};
`;
