import { ReviewCardList } from '@/components/ReviewCardList';
import { useGetChannels } from '@/hooks/useGetChannel';
import { useGetPostByChannel } from '@/hooks/usePost';

export default function ReviewList() {
  const { data: channels } = useGetChannels();
  const { data: postsByChannel } = useGetPostByChannel({
    channelId: '65965f97f759661f3e669793',
  });

  console.log(postsByChannel);

  return <ReviewCardList posts={postsByChannel} />;
}
