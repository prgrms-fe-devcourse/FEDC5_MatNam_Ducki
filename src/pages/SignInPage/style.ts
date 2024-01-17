import styled from '@emotion/styled';

export const SignInPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const GuideContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  margin-top: 4rem;
  font-size: 1.4rem;
`;

export const GuideComment = styled.span`
  color: ${(props) => props.theme.colors.gray};
`;

export const SignInButton = styled.button`
  border: none;
  color: #eea734;
  font-weight: bold;
  cursor: pointer;
`;

export const MainLogo = styled.img`
  width: 13rem;
  margin: 4rem auto;
`;
