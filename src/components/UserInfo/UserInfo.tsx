import styled from '@emotion/styled';

import { PropsUserInfo } from '@/types/profile';

const UserInfoSection = styled.div`
  margin-left: 2.2rem;
  margin-top: 3rem;
`;

const UserName = styled.div`
  font-size: 1.8rem;
  margin-bottom: 0.4rem;
  font-weight: bold;
`;

const UserId = styled.div`
  font-size: 1.3rem;
  color: #9796a1;
`;

export default function UserInfo({ userName, userId }: PropsUserInfo) {
  return (
    <UserInfoSection>
      <UserName>{userName}</UserName>
      <UserId>{userId}</UserId>
    </UserInfoSection>
  );
}
