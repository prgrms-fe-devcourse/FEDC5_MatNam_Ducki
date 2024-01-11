import styled from '@emotion/styled';

import { useCheckAuthUser } from '@/hooks/useAuth';
import { useGetPostDetail } from '@/hooks/useGetProfile';

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

export default function LikePosts() {
  const { data: auth } = useCheckAuthUser();

  if (!auth) {
    // auth가 undefined일 아무것도 렌더링하지 않음
    return null;
  }

  const likes = auth.likes.map((item) => item.post); // 사용자의 좋아요한 게시물의 postId

  const detailPosts = likes.map((item) => useGetPostDetail(item).data); // 게시물의 detailPost

  return (
    <PostWrapper>
      {likes && likes.length !== 0 ? (
        <>
          <PostHeader>
            좋아요 <PostLengthTitle>{likes.length}개</PostLengthTitle>
          </PostHeader>
          {detailPosts?.map((item) => (
            <ReviewCard
              style={{ marginTop: '3.2rem' }}
              key={item?._id}
              imageUrl={item?.image}
              profileImage={item?.author?.image}
              profileName={item?.author?.fullName}
              content={item?.title}></ReviewCard>
          ))}
        </>
      ) : (
        <>
          <PostHeader>좋아요 목록</PostHeader>
          <EmptyPostTitle>아직 좋아요한 목록이 없습니다.</EmptyPostTitle>
        </>
      )}
    </PostWrapper>
  );
}
