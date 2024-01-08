import styled from '@emotion/styled';

export const ChangeImageModalWrapper = styled.div`
  min-width: 200px;
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
  border-bottom: 1px solid #b6b6b5;
  padding: 1rem 0;

  &:last-child {
    border: none;
  }
`;
