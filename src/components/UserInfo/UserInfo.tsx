import styled from '@emotion/styled';

import { PropsUserInfo } from '@/types/profile';

const UserInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const UserName = styled.div`
  font-size: 1.8rem;
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
