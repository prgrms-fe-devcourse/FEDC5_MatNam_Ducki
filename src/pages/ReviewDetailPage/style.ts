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
  gap: 20px;
`;

export const UserInfoTextBox = styled.div``;

export const UserName = styled.h3``;

export const UserMail = styled.span`
  opacity: 0.3;
`;

export const BadgeWrapper = styled.div`
  width: 50px;
  margin: 10px 0;
  cursor: pointer;
`;

export const CommentList = styled.div`
  height: 100%;
  margin-bottom: 108px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
`;

export const CommentBox = styled.div`
  padding: 0.625rem;
  border: 2px solid #cccccc;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
  font-size: 17px;
`;

export const CommentUserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Comment = styled.p`
  font-weight: ${theme.fontWeight.regular};
`;

export const CommentUserName = styled.h3``;
