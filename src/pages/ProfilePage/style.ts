import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const ProfileWrapper = styled.div`
  background-color: #ffffff;
`;

export const ProfileBackGroundImage = styled.div`
  background-image: url('../../../public/images/profileBackground.png');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${theme.fontWeight.medium};
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  padding-top: 16rem;
  width: 100%;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 2rem 0 2rem;
`;

export const ImageWrapper = styled.div`
  margin-top: 1.2rem;
  margin-left: 4rem;
`;

export const Label = styled.span`
  color: #868686;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;
