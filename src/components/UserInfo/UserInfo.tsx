import styled from '@emotion/styled';

import { PropsUserInfo } from '@/types/profile';

const UserInfoSection = styled.div`
  margin-left: 2.4rem;
  margin-top: 1.6rem;
`;

const UserName = styled.div`
  font-size: 2.24rem;
  margin-bottom: 0.32rem;
  font-weight: bold;
`;

const UserId = styled.div`
  font-size: 1.6rem;
  color: #777777;
`;

export default function UserInfo({ userName, userId }: PropsUserInfo) {
  return (
    <UserInfoSection>
      <UserName>{userName}</UserName>
      <UserId>{userId}</UserId>
    </UserInfoSection>
  );
}
