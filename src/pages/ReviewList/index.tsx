import { useCallback, useEffect, useState } from 'react';

import { ChannelList } from '@/components/Channel/ChannelList';
import Circle from '@/components/Common/Circle';
import { ReviewCardList } from '@/components/ReviewCardList';
import { useGetPostByChannel } from '@/hooks/usePost';
import { Post } from '@/types/response';

import { ReviewListContainer, SortContainer, SortOption } from './style';

export default function ReviewList() {
  const [channelId, setChannelId] = useState('65965f97f759661f3e669793');
  const [sortType, setSortType] = useState('latest'); // ['latest', 'popular']
  const [sortedPosts, setSortedPosts] = useState<Post[]>([]);

  const { data: postsByChannel } = useGetPostByChannel({
    channelId: channelId,
  });

  const sortPopularPosts = useCallback((posts: Post[]) => {
    return posts.slice().sort((a, b) => {
      return b.likes.length - a.likes.length;
    });
  }, []);

  useEffect(() => {
    if (postsByChannel) {
      if (sortType === 'popular') {
        setSortedPosts(sortPopularPosts(postsByChannel));
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
        <SortContainer>
          <SortOption
            active={sortType === 'latest'}
            onClick={() => setSortType('latest')}>
            최신순
          </SortOption>
          <Circle />
          <SortOption
            active={sortType === 'popular'}
            onClick={() => setSortType('popular')}>
            좋아요순
          </SortOption>
        </SortContainer>
        <ChannelList channelId={channelId} handleClick={handleChannelId} />
        <ReviewCardList posts={sortedPosts} />
      </ReviewListContainer>
    </>
  );
}
