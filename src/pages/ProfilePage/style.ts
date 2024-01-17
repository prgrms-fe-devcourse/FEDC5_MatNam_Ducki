import styled from '@emotion/styled';

import { PROFILE_BACKGROUND_IMAGE } from '@/constants/profile';
import { theme } from '@/styles/Theme';

export const ProfileWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const ProfileBackGroundImage = styled.div`
  background-image: url(${PROFILE_BACKGROUND_IMAGE});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${theme.fontWeight.medium};
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  padding-top: 14rem;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

export const ProfileInfo = styled.div`
  display: flex;
  gap: 1rem;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div``;

export const Label = styled.span`
  color: #868686;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;
