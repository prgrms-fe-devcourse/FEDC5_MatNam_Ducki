import { useNavigate } from 'react-router-dom';

import { useCheckAuthUser } from '@/hooks/useAuth';
import { useGetPost } from '@/hooks/useGetProfile';
import { PATH } from '@/routes/path';

import { MyReview } from '../ReviewCard/MyReview';
import { EmptyPostTitle, PostWrapper } from './style';

export default function MyPosts() {
  const navigate = useNavigate();
  const { data: auth } = useCheckAuthUser();

  if (!auth) {
    return null;
  }

  const { data: posts } = useGetPost(auth._id);

  return (
    <PostWrapper>
      {posts?.length !== 0 && auth ? (
        <>
          {posts?.map((item) => (
            <MyReview
              key={item._id}
              imageUrl={item.image}
              restaurant={item.restaurant}
              location={item.location}
              review={item.review}
              likes={item.likes.length}
              channelId={item.channel._id}
              id={auth._id}
              onClick={() => navigate(`${PATH.REVIEWDETAIL}/${item._id}`)}
            />
          ))}
        </>
      ) : (
        <>
          <EmptyPostTitle>아직 작성된 포스트가 없습니다.</EmptyPostTitle>
        </>
      )}
    </PostWrapper>
  );
}
