import { useCheckAuthUser } from '@/hooks/useAuth';
import { useGetPostDetail } from '@/hooks/useGetProfile';

import { ReviewCard } from '../ReviewCard/ReviewCard';
import { PostWrapper } from './style';
import { EmptyPostTitle } from './style';

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
          {detailPosts?.map(
            (item) =>
              item && (
                <ReviewCard
                  style={{ marginBottom: '3.2rem' }}
                  key={item._id}
                  imageUrl={item.image}
                  createdAt={item.createdAt}
                  likes={item.likes.length}
                  profileName={item.author.fullName}
                  content={item.title}></ReviewCard>
              ),
          )}
        </>
      ) : (
        <>
          <EmptyPostTitle>아직 좋아요한 목록이 없습니다.</EmptyPostTitle>
        </>
      )}
    </PostWrapper>
  );
}