import ProfileFilledIcon from '@/components/Common/Icons/ProfileFilledIcon';
import ConversationList from '@/components/DirectMessage/ConversationList';
import SearchBar from '@/components/SearchBar';
import { PATH } from '@/routes/path';

import { DirectMessagePageWrapper, DirectMessageTitle } from './style';

export default function DirectMessagePage() {
  return (
    <DirectMessagePageWrapper>
      <DirectMessageTitle>나의 메세지함</DirectMessageTitle>
      <SearchBar
        disabled
        placeholder="유저 검색하기"
        searchIcon={<ProfileFilledIcon />}
        navigatePath={PATH.SEARCH.USER}
      />
      <ConversationList />
    </DirectMessagePageWrapper>
  );
}
