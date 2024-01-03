import styled from '@emotion/styled';

import { PropsUserInfo } from '@/types/profile';

const UserInfoSection = styled.div`
  margin-top: 20px;
`;

const NickName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const UserId = styled.div`
  color: #777777;
`;

export default function UserInfo({ userName, userId }: PropsUserInfo) {
  return (
    <UserInfoSection>
      <NickName>{userName}</NickName>
      <UserId>@{userId}</UserId>
    </UserInfoSection>
  );
}
