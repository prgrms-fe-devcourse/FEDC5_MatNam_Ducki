import styled from '@emotion/styled';

import { useCheckAuthUser } from '@/hooks/useAuth';
import { useGetPost } from '@/hooks/useGetProfile';

import { ReviewCard } from '../ReviewCard/ReviewCard';

const PostWrapper = styled.div``;

const EmptyPostTitle = styled.div`
  margin-top: 1rem;
  color: #777777;
`;

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
              style={{ marginBottom: '3.2rem' }}
              imageUrl={item.image}
              profileImage={auth.image}
              profileName={auth.fullName}
              content={item.title}></ReviewCard>
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
