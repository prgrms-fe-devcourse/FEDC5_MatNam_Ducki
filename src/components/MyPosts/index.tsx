import { useNavigate } from 'react-router-dom';

import { useCheckAuthUser } from '@/hooks/useAuth';
import { useGetPost } from '@/hooks/useGetProfile';
import { PATH } from '@/routes/path';

import { MyReview } from '../ReviewCard/MyReview';
import { EmptyResultText, EmptyResultWrapper, PostWrapper } from './style';

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
        <EmptyResultWrapper>
          <EmptyResultText>
            나만의 맛집들을
            <EmptyResultText>사람들에게 공유해 보세요! 🚀</EmptyResultText>
          </EmptyResultText>
        </EmptyResultWrapper>
      )}
    </PostWrapper>
  );
}
