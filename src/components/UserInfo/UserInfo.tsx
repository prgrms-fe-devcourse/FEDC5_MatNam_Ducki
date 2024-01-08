import styled from '@emotion/styled';

import { PropsUserInfo } from '@/types/profile';

const UserInfoSection = styled.div`
  margin-left: 1.5rem;
  margin-top: 1rem;
`;

const UserName = styled.div`
  font-size: 1.4rem;
  margin-bottom: 0.2rem;
  font-weight: bold;
`;

const UserId = styled.div`
  color: #777777;
`;

export default function UserInfo({ userName, userId }: PropsUserInfo) {
  return (
    <UserInfoSection>
      <UserName>{userName}</UserName>
      <UserId>@{userId}</UserId>
    </UserInfoSection>
  );
}
