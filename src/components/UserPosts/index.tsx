import { useNavigate } from 'react-router-dom';

import { useGetPost } from '@/hooks/useGetProfile';
import { PATH } from '@/routes/path';

import { MyReview } from '../ReviewCard/MyReview';
import { EmptyResultText, EmptyResultWrapper, PostWrapper } from './style';

interface PropsUserPosts {
  userId: string;
}

export default function UserPosts({ userId }: PropsUserPosts) {
  const navigate = useNavigate();
  const { data: userPost } = useGetPost(userId);

  if (!userPost?.length) {
    return (
      <EmptyResultWrapper>
        <EmptyResultText>
          아직 작성된...
          <EmptyResultText>게시글이 없습니다...📂 </EmptyResultText>
        </EmptyResultText>
      </EmptyResultWrapper>
    );
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
