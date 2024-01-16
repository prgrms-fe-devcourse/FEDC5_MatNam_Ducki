import styled from '@emotion/styled';

export const ReviewCardContainer = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  margin: 0 auto;
  border-radius: 1rem;
  border: 1px solid #bdbdbd;
  box-shadow: 0px 1.5px 1.5px rgba(0, 0, 0, 0.25);
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
  padding: 0.5rem 1rem;
`;

export const ElaspedTime = styled.span`
  padding: 0.5rem 1rem;
`;

export const ReviewCardBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ReviewCardContents = styled.span``;

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
