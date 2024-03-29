import styled from '@emotion/styled';

import { PROFILE_BACKGROUND_IMAGE } from '@/constants/profile';
import { theme } from '@/styles/Theme';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const ProfileBackGroundImage = styled.div`
  background-image: url(${PROFILE_BACKGROUND_IMAGE});
  background-size: cover;
  font-weight: ${theme.fontWeight.medium};
`;

export const UserInfoWrapper = styled.div`
  display: flex;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 2rem 0 2rem;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  margin-top: 1.2rem;
  margin-left: 2rem;
  gap: 1.5rem;
`;

export const Label = styled.span`
  color: ${theme.colors.gray};
  font-size: 1.3rem;
`;

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const IntroductionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  padding-bottom: 2.5rem;
`;

export const Introduction = styled.span`
  line-height: 2rem;
  box-sizing: border-box;
`;

export const IntroductionBar = styled.div`
  border-bottom: 1px solid ${theme.colors.lightGray};
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-top: 14rem;
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostsTitle = styled.div`
  font-size: 1.8rem;
  font-weight: ${theme.fontWeight.bold};
`;
