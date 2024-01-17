import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const ChangeImageModalWrapper = styled.div`
  width: calc(100vw - 4rem);
  max-width: 37.5rem;
`;

export const ImageSelectInput = styled.input`
  display: none;
`;

export const SelectList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SelectItem = styled.li`
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid ${`${theme.colors.gray}50`};
  padding: 2rem 0;

  font-weight: ${theme.fontWeight.medium};

  &:last-child {
    border: none;
  }
`;
