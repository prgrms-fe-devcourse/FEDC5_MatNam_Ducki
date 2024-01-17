import styled from '@emotion/styled';

export const BadgeContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Super = styled.sup`
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  display: inline-flex;
  align-items: center;
  height: 1.5rem;
  padding: 0 0.4rem;
  font-size: 1.2rem;
  border-radius: 2rem;
  color: white;
  background-color: #f44;
  transform: translate(50%, -50%);

  &.dot {
    padding: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
`;
