import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const DropDownItem = styled.li`
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  &:hover {
    background-color: ${theme.colors.lightSecondary};
  }
`;

export const DropDownWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 140%;
  left: 0;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid ${theme.colors.lightGray};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 0.3rem 0;
  width: 4.5rem;
`;
