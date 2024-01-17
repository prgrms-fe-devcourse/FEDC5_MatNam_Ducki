import styled from '@emotion/styled';

import { PROFILE_BACKGROUND_IMAGE } from '@/constants/profile';
import { theme } from '@/styles/Theme';

export const ProfileWrapper = styled.div`
  background-color: #ffffff;
`;

export const ProfileBackGroundImage = styled.div`
  background-image: url(${PROFILE_BACKGROUND_IMAGE});
  background-size: cover;
  font-weight: ${theme.fontWeight.medium};
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  padding-top: 14rem;
  width: 100%;
`;

export const UserWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin: 3rem 2rem 0 2rem;
`;

export const ImageWrapper = styled.div`
  margin-top: 1.2rem;
  margin-left: 2rem;
`;

export const Label = styled.span`
  color: ${theme.colors.gray};
  font-size: 1.3rem;
`;

export const IntroductionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const Introduction = styled.span`
  margin-top: 0.6rem;
  line-height: 2.08rem;
  box-sizing: border-box;
`;

export const IntroductionBar = styled.div`
  border-bottom: 1px solid ${theme.colors.lightGray};
`;

export const SelectorWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
  display: flex;
  border-radius: 1rem;
  height: 4rem;
  align-items: center;
`;

export const PostsTitle = styled.div`
  font-size: ${theme.size.large};
  font-weight: ${theme.fontWeight.bold};
`;
