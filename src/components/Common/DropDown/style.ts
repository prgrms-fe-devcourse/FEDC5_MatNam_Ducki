import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const DropDownItem = styled.li`
  cursor: pointer;
  font-size: 1.4rem;
  padding: 0.4rem 0.8rem;
  &:hover {
    background-color: ${theme.colors.gray};
  }
`;

export const DropDownWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 130%;
  left: 0;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid ${theme.colors.gray};
  padding: 0.3rem 0;
`;
