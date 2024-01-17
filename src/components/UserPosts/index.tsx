import { useGetPost } from '@/hooks/useGetProfile';

import { ReviewCard } from '../ReviewCard/ReviewCard';
import { EmptyPostTitle, PostWrapper } from './style';

interface PropsUserPosts {
  userName: string;
  userId: string;
}

export default function UserPosts({ userId, userName }: PropsUserPosts) {
  const { data: userPost } = useGetPost(userId);

  if (!userPost) {
    return <EmptyPostTitle>작성된 리뷰가 없습니다.</EmptyPostTitle>;
  }
  return (
    <PostWrapper>
      {userPost.map((item) => (
        <ReviewCard
          key={item._id}
          imageUrl={item.image}
          likes={item.likes.length}
          profileName={userName}
          restaurant={item.restaurant}
          location={item.location}
          review={item.review}
          createdAt={item.createdAt}
          channelId={item.channel._id}
          id={item.author._id}
        />
      ))}
    </PostWrapper>
  );
}
