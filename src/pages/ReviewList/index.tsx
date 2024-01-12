import { useCallback, useEffect, useState } from 'react';

import { ChannelList } from '@/components/Channel/ChannelList';
import { ReviewCardList } from '@/components/ReviewCardList';
import { useGetPostByChannel } from '@/hooks/usePost';
import { Post } from '@/types/response';

import { ReviewListContainer } from './style';

export default function ReviewList() {
  const [channelId, setChannelId] = useState('65965f97f759661f3e669793');
  const [sortType, setSortType] = useState('latest'); // ['latest', 'popular']
  const [sortedPosts, setSortedPosts] = useState<Post[]>([]);

  const { data: postsByChannel } = useGetPostByChannel({
    channelId: channelId,
  });

  useEffect(() => {
    if (postsByChannel) {
      if (sortType === 'popular') {
        const popularPosts = postsByChannel.slice().sort((a, b) => {
          return b.likes.length - a.likes.length;
        });
        setSortedPosts(popularPosts);
      } else {
        setSortedPosts(postsByChannel);
      }
    }
  }, [postsByChannel, sortType]);

  const handleChannelId = useCallback((channelId: string) => {
    setChannelId(channelId);
  }, []);

  return (
    <>
      <ReviewListContainer>
        <button onClick={() => setSortType('latest')}>최신 순</button>
        <button onClick={() => setSortType('popular')}>인기 순</button>
        <ChannelList channelId={channelId} handleClick={handleChannelId} />
        <ReviewCardList posts={sortedPosts} />
      </ReviewListContainer>
    </>
  );
}
