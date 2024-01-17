import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const ReviewCardContainer = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  margin: 0 auto;
  border-bottom: 0.1rem solid ${theme.colors.lightGray};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 0;
`;

export const ReviewCardHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-size: 1.2rem;
  color: #4f4f4f;
`;

export const ProfileNickname = styled.span`
  cursor: pointer;
  padding: 0 0.5rem 0.5rem 0;
`;

export const ElaspedTime = styled.span`
  padding: 0 0 0.5rem 0.5rem;
`;

export const ReviewCardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ReviewCardContents = styled.span`
  font-size: 1.4rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 2.2rem;
  color: #2c2c2c;
  margin-top: 0.3rem;
`;

export const ReviewCardImage = styled.img`
  width: 30rem;
  height: 30rem;
  border-radius: 5%;
  margin: 1rem auto 0;
  object-fit: cover;
`;

export const ReviewCardInfo = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5%;
`;

export const RestaurantName = styled.span`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  font-size: 1.6rem;
  font-weight: bold;
`;

export const ThumbsDownWrapper = styled.div`
  transform: translateY(0.4rem);
`;

export const LikeContainer = styled.span`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  font-size: 1.4rem;
  color: ${theme.colors.primary};
  font-weight: ${theme.fontWeight.semiBold};
`;

export const RestaurantLocation = styled.span`
  color: ${theme.colors.gray};
  font-size: 1.3rem;
`;
