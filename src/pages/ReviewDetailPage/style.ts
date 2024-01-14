import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const ReviewDetailPage = styled.div`
  --mobile-width: 450px;

  margin: 0 auto;
  width: var(--mobile-width);
  display: flex;
  flex-direction: column;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const UserInfoTextBox = styled.div``;

export const UserName = styled.h3``;

export const UserMail = styled.span`
  opacity: 0.3;
`;

export const BadgeWrapper = styled.div`
  margin: 1rem 0;
  cursor: pointer;
`;

export const CommentList = styled.div`
  height: 100%;
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
`;

export const CommentBox = styled.div`
  padding: 1rem;
  border: 2px solid #cccccc;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 17px;
`;

export const CommentUserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Comment = styled.p`
  font-weight: ${theme.fontWeight.regular};
`;

export const CommentUserName = styled.h3``;

export const ReviewWrapper = styled.div``;

export const ReviewImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5%;
`;
