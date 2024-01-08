import styled from '@emotion/styled';

import { useGetPost, useProfile } from '@/hooks/useGetProfile';

import { ReviewCard } from '../ReviewCard/ReviewCard';

const PostWrapper = styled.div`
  margin-top: 2.1rem;
`;

const PostHeader = styled.div`
  font-size: 1.4rem;
  margin-bottom: 1.4rem;
`;

const PostLengthTitle = styled.span`
  font-size: 1.3rem;
`;

const EmptyPostTitle = styled.div`
  margin-top: 1rem;
  color: #777777;
`;

export default function MyPosts() {
  const { data: auth } = useProfile();
  const { data: posts } = useGetPost('64edba4307cd8f12162e2eaa');

  console.log(auth);

  return (
    <PostWrapper>
      {posts?.length !== 0 ? (
        <>
          <PostHeader>
            포스트 <PostLengthTitle>{posts?.length}개</PostLengthTitle>
          </PostHeader>
          {posts?.map((item) => (
            <ReviewCard
              style={{ marginTop: '2rem' }}
              key={item._id}
              imageUrl={item.image}
              profileImage={auth?.image}
              profileName={auth?.fullName}
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
