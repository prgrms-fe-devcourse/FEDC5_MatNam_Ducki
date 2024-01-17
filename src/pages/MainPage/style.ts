import styled from '@emotion/styled';

export const MainPageWrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => `calc(100vh - ${theme.size.navbarSize})`};
  overflow: auto;

  // 스크롤바 숨기기
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 37.5rem;
  padding: 0 2rem;
  height: 100%;
  margin: auto;
  border-right: 1px solid black;
  border-left: 1px solid black;
`;
