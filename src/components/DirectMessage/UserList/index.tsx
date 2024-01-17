import { useNavigate } from 'react-router-dom';

import PlusMessageIcon from '@/components/Common/Icons/PlusMessageIcon';
import { PATH } from '@/routes/path';
import { User } from '@/types/response';

import UserProfileInfo from '../UserProfileInfo';
import { PlusMessageButton, UserItemWrapper, UserListWrapper } from './style';

interface UserListProps {
  userList: User[];
}

export default function UserList({ userList }: UserListProps) {
  const navigate = useNavigate();

  const navigateToUserMessage = (userId: string) => {
    navigate(`${PATH.DIRECTMESSAGEDETAIL}/${userId}`);
  };

  return (
    <UserListWrapper>
      {userList.map((user) => (
        <UserItemWrapper key={user._id}>
          <UserProfileInfo user={user} />
          <PlusMessageButton onClick={() => navigateToUserMessage(user._id)}>
            <PlusMessageIcon />
          </PlusMessageButton>
        </UserItemWrapper>
      ))}
    </UserListWrapper>
  );
}
