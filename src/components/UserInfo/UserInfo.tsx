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
  nickname: string;
  userId: string;
}

export default function UserInfo({ nickname, userId }: PropsUserInfo) {
  return (
    <UserInfoSection>
      <NickName>{nickname}</NickName>
      <UserId>@{userId}</UserId>
    </UserInfoSection>
  );
}
