import styled from '@emotion/styled';

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

export interface PropsUserInfo {
  userName: string;
  userId: string;
}

export default function UserInfo({ userName, userId }: PropsUserInfo) {
  return (
    <UserInfoSection>
      <NickName>{userName}</NickName>
      <UserId>@{userId}</UserId>
    </UserInfoSection>
  );
}
