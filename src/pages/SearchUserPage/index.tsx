import { useEffect, useState } from 'react';

import ProfileFilledIcon from '@/components/Common/Icons/ProfileFilledIcon';
import UserList from '@/components/DirectMessage/UserList';
import SearchBar from '@/components/SearchBar';
import { useSearchAll } from '@/hooks/useSearch';

import { SearchUserWrapper } from './style';

export default function SearchUserPage() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const { refetch, data } = useSearchAll(searchKeyword);

  const userResult = data?.userData ?? [];

  useEffect(() => {
    if (searchKeyword) {
      refetch();
    }
  }, [searchKeyword]);

  return (
    <SearchUserWrapper>
      <SearchBar
        searchIcon={<ProfileFilledIcon />}
        onSearchKeyword={setSearchKeyword}
        placeholder="유저를 검색해 보세요"
      />
      {userResult && <UserList userList={userResult} />}
    </SearchUserWrapper>
  );
}
