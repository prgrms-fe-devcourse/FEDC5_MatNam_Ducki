import styled from '@emotion/styled';

import { useCheckAuthUser } from '@/hooks/useAuth';
import { useGetPost } from '@/hooks/useGetProfile';

import { ReviewCard } from '../ReviewCard/ReviewCard';

const PostWrapper = styled.div`
  margin-top: 3.36rem;
`;

const PostHeader = styled.div`
  font-size: 2.24rem;
  margin-bottom: 2.24rem;
`;

const PostLengthTitle = styled.span`
  font-size: 2.08rem;
`;

const EmptyPostTitle = styled.div`
  margin-top: 1.6rem;
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
          <PostHeader>
            포스트 <PostLengthTitle>{posts?.length}개</PostLengthTitle>
          </PostHeader>
          {posts?.map((item) => (
            <ReviewCard
              style={{ marginTop: '3.2rem' }}
              key={item._id}
              imageUrl={item.image}
              profileImage={auth.image}
              profileName={auth.fullName}
              content={item.title}></ReviewCard>
          ))}
        </>
      ) : (
        <>
          <PostHeader>포스트</PostHeader>
          <EmptyPostTitle>아직 작성된 포스트가 없습니다.</EmptyPostTitle>
        </>
      )}
    </PostWrapper>
  );
}
