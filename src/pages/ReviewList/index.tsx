import { useCallback, useState } from 'react';

import { ChannelList } from '@/components/Channel/ChannelList';
import { ReviewCardList } from '@/components/ReviewCardList';
import { useGetPostByChannel } from '@/hooks/usePost';

export default function ReviewList() {
  const [channelId, setChannelId] = useState('65965f97f759661f3e669793');

  const { data: postsByChannel } = useGetPostByChannel({
    channelId: channelId,
  });

  const handleChannelId = useCallback((channelId: string) => {
    setChannelId(channelId);
  }, []);

  return (
    <>
      <ChannelList channelId={channelId} handleClick={handleChannelId} />
      <ReviewCardList posts={postsByChannel} />
    </>
  );
}
