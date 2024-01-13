import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const Introduction = styled.span`
  margin-top: 0.8rem;
  box-sizing: border-box;
`;

export const IntroductionBar = styled.div`
  border-bottom: 1px solid #ccc;
`;

export const IntroductionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const IntroductionForm = styled.form`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const IntroductionButton = styled.button`
  border-radius: 6px;
  padding: 0.16rem;
  font-weight: bold;
  background-color: white;
  color: ${theme.colors.primary};
  width: 5rem;
  height: 3.5rem;
  border: none;
`;
