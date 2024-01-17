import styled from '@emotion/styled';

export const ReviewDetailPage = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const UserInfoTextBox = styled.div``;

export const UserName = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 16px;
`;

export const UserMail = styled.span`
  opacity: 0.3;
  font-size: 12px;
`;

export const BadgeWrapper = styled.div`
  margin: 1rem 0;
  cursor: pointer;
`;

export const CommentList = styled.div`
  height: 100%;

  // bottom의 고정 값에 맞춰 수정
  margin-bottom: 145px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
`;

export const CommentBox = styled.div`
  padding: 1rem;

  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 17px;
`;

export const CommentUserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WriterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CommentCreatedTime = styled.span`
  color: ${({ theme }) => theme.colors.gray};
`;

export const Comment = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.gray};
`;

export const CommentUserName = styled.h3``;

export const ReviewWrapper = styled.div``;

export const ReviewImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5%;
`;

export const ReviewHeaderWrapper = styled.div`
  margin: 10px 0px;
  line-height: 2.2rem;
`;

export const ReviewHeaderTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 3rem;
`;

export const ReviewHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const RestaurantName = styled.h3`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const RestaurantLocation = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const OpeningTitle = styled.h3`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray};
  margin: 1.5rem 0;
`;

export const RestaurantOpeningTime = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 1.5rem;
`;

export const ReviewContent = styled.div`
  margin: 3.3rem 0;
`;
