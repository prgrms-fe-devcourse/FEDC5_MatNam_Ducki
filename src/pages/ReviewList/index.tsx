import { useCallback, useEffect, useState } from 'react';

import { ChannelList } from '@/components/Channel/ChannelList';
import Circle from '@/components/Common/Circle';
import { ReviewCardList } from '@/components/ReviewCardList';
import { CHANNEL } from '@/constants/channel';
import { SORT_TYPE } from '@/constants/review';
import { useGetPostByChannel } from '@/hooks/usePost';
import { Post } from '@/types/response';

import { ReviewListContainer, SortContainer, SortOption } from './style';

export default function ReviewList() {
  const [channelId, setChannelId] = useState(CHANNEL.LIKE);
  const [sortType, setSortType] = useState(SORT_TYPE.LATEST); // ['latest', 'popular']
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
      if (sortType === SORT_TYPE.POPULAR) {
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
            active={sortType === SORT_TYPE.LATEST}
            onClick={() => setSortType(SORT_TYPE.LATEST)}>
            최신순
          </SortOption>
          <Circle />
          <SortOption
            active={sortType === SORT_TYPE.POPULAR}
            onClick={() => setSortType(SORT_TYPE.POPULAR)}>
            좋아요순
          </SortOption>
        </SortContainer>
        <ChannelList channelId={channelId} handleClick={handleChannelId} />
        <ReviewCardList posts={sortedPosts} />
      </ReviewListContainer>
    </>
  );
}
