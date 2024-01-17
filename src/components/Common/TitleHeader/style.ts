import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const StyledTitleHeader = styled.div`
  max-width: ${({ theme }) => theme.device.mobile};
  width: 100%;
  height: 6rem;
  background-color: white;
  margin: 0rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 2px solid ${`${theme.colors.lightGray}aa`};
`;

export const TitleWrapper = styled.div`
  position: relative;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  left: -3rem;
  top: 50%;
  transform: translateY(-50%);
`;

export const LogoRightWrapper = styled.div`
  position: absolute;
  right: -3rem;
  top: 50%;
  transform: translateY(-50%);
`;

export const Title = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${theme.colors.primary};
`;

export const IconWrapper = styled.div`
  padding: 1rem 2rem;
  position: absolute;
  left: 0;
  cursor: pointer;
`;
