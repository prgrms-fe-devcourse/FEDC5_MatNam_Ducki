import { useNavigate } from 'react-router-dom';

import { useGetPost } from '@/hooks/useGetProfile';
import { PATH } from '@/routes/path';

import { MyReview } from '../ReviewCard/MyReview';
import { EmptyPostTitle, PostWrapper } from './style';

interface PropsUserPosts {
  userId: string;
}

export default function UserPosts({ userId }: PropsUserPosts) {
  const navigate = useNavigate();
  const { data: userPost } = useGetPost(userId);

  if (!userPost) {
    return <EmptyPostTitle>작성된 리뷰가 없습니다.</EmptyPostTitle>;
  }
  return (
    <PostWrapper>
      {userPost.map((item) => (
        <MyReview
          key={item._id}
          imageUrl={item.image}
          likes={item.likes.length}
          restaurant={item.restaurant}
          location={item.location}
          review={item.review}
          channelId={item.channel._id}
          id={item.author._id}
          onClick={() => navigate(`${PATH.REVIEWDETAIL}/${item._id}`)}
        />
      ))}
    </PostWrapper>
  );
}
