import styled from '@emotion/styled';

export const MainPageWrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => `calc(100vh - ${theme.size.navbarSize})`};
  overflow: auto;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 37.5rem;
  padding: 0 2rem;
  height: 100%;
  margin: auto;
`;
