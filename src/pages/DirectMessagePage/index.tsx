import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import AnimationContainer from '@/components/Common/AnimationContainer';
import ProfileFilledIcon from '@/components/Common/Icons/ProfileFilledIcon';
import ConversationList from '@/components/DirectMessage/ConversationList';
import SearchBar from '@/components/SearchBar';
import { userAtom } from '@/recoil/user';
import { PATH } from '@/routes/path';
import { Toast } from '@/utils/toast';

import { DirectMessagePageWrapper, DirectMessageTitle } from './style';

export default function DirectMessagePage() {
  const user = useRecoilValue(userAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      Toast.info('로그인 후 이용해 보세요!');
      navigate(PATH.SIGNIN);
    }
  }, []);

  return (
    <AnimationContainer>
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
    </AnimationContainer>
  );
}
