import styled from '@emotion/styled';

export const StyledTitleHeader = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  position: relative;
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
