import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const ReviewCardContainer = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  margin: 0 auto;
  border-bottom: 0.1rem solid ${theme.colors.lightGray};
`;

export const ReviewCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  font-size: 1.2rem;
  color: #4f4f4f;
`;

export const ProfileNickname = styled.span`
  cursor: pointer;
`;

export const ElaspedTime = styled.span``;

export const ReviewCardBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ReviewCardContents = styled.span`
  font-size: 1.4rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ReviewCardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5%;
`;

export const ReviewCardInfo = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5%;
`;

export const RestaurantName = styled.span`
  font-weight: bold;
`;

export const LikeContainer = styled.span``;

export const RestaurantLocation = styled.span`
  color: #828282;
  font-size: 1.5rem;
`;
