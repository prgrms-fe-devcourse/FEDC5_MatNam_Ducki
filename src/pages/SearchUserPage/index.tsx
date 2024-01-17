import { useEffect, useState } from 'react';

import ProfileFilledIcon from '@/components/Common/Icons/ProfileFilledIcon';
import UserList from '@/components/DirectMessage/UserList';
import SearchBar from '@/components/SearchBar';
import { useSearchAll } from '@/hooks/useSearch';

import {
  EmptyResultText,
  EmptyResultWrapper,
  SearchUserWrapper,
} from './style';

export default function SearchUserPage() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const { refetch, data, isFetched } = useSearchAll(searchKeyword);

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
        placeholder="찾으시는 유저가 있나요?"
      />
      {userResult.length !== 0 && <UserList userList={userResult} />}{' '}
      {isFetched && userResult.length === 0 && (
        <EmptyResultWrapper>
          <EmptyResultText>존재하지 않는 유저예요 👀</EmptyResultText>
          <EmptyResultText>다른 이름으로 검색해 볼까요?</EmptyResultText>
        </EmptyResultWrapper>
      )}
    </SearchUserWrapper>
  );
}
