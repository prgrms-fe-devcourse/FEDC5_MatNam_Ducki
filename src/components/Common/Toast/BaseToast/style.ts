import styled from '@emotion/styled';

import { getPositionStyle, TOP_POSITIONS } from '@/utils/getPositionStyle';

interface BaseToastWrapperProps {
  index: number;
  backgroundColor?: string;
  position?: string;
}

export const BaseToastWrapper = styled.div<BaseToastWrapperProps>`
  position: fixed;
  border-radius: 0.8rem;
  border: 1px solid gray;
  padding: 0.8rem 0.8rem;
  font-size: 1rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  ${({ position, index }) =>
    getPositionStyle(position || TOP_POSITIONS.CENTER, index)};
`;
