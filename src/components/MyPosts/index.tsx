import { useCheckAuthUser } from '@/hooks/useAuth';
import { useGetPost } from '@/hooks/useGetProfile';

import { ReviewCard } from '../ReviewCard/ReviewCard';
import { EmptyPostTitle, PostWrapper } from './style';

export default function MyPosts() {
  const { data: auth } = useCheckAuthUser();

  if (!auth) {
    // auth가 undefined일 아무것도 렌더링하지 않음
    return null;
  }

  const { data: posts } = useGetPost(auth._id);

  return (
    <PostWrapper>
      {posts?.length !== 0 && auth ? (
        <>
          {posts?.map((item) => (
            <ReviewCard
              key={item._id}
              imageUrl={item.image}
              profileName={auth.fullName}
              restaurant={item.restaurant}
              location={item.location}
              review={item.review}
              likes={item.likes.length}
              channelId={item.channel._id}
              createdAt={item.createdAt}
              id={auth._id}
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
