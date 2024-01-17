import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const EmptyIntroduce = styled.div`
  color: #ccc;
`;

export const Introduction = styled.span`
  margin-top: 0.83rem;
  margin-left: 0.4rem;
  box-sizing: border-box;
`;

export const IntroductionBar = styled.div`
  border-bottom: 1px solid ${theme.colors.lightGray};
`;

export const IntroductionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const IntroductionForm = styled.form`
  display: flex;
  align-items: center;
`;

export const IntroductionButton = styled.button`
  border-radius: 6px;
  padding: 0.16rem;
  font-weight: ${theme.fontWeight.bold};
  background-color: white;
  color: ${theme.colors.primary};
  width: 5rem;
  height: 3.5rem;
  border: none;
`;
