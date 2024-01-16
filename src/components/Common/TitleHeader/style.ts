import styled from '@emotion/styled';

export const StyledTitleHeader = styled.div`
  max-width: ${({ theme }) => theme.device.mobile};
  width: 100%;
  height: 4rem;
  background-color: white;
  opacity: 0.8;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  position: sticky;
  top: 0;
`;

export const Title = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const IconWrapper = styled.div`
  padding: 1rem 2rem;
  position: absolute;
  left: 0;
  cursor: pointer;
`;
