import { Post } from '@/types/response';

import { ReviewCard } from '../ReviewCard/ReviewCard';
import { EmptyPostTitle, PostWrapper } from './style';

interface PropsUserPosts {
  userPost: Post[];
  userImage?: string;
  userName: string;
}

export default function UserPosts({
  userPost,
  userImage,
  userName,
}: PropsUserPosts) {
  return (
    <PostWrapper>
      {userPost.length !== 0 ? (
        <>
          {userPost?.map((item) => (
            <ReviewCard
              key={item._id}
              style={{ marginBottom: '3.2rem' }}
              imageUrl={item.image}
              profileImage={userImage}
              profileName={userName}
              content={item.title}></ReviewCard>
          ))}
        </>
      ) : (
        <EmptyPostTitle>아직 작성된 포스트가 없습니다.</EmptyPostTitle>
      )}
    </PostWrapper>
  );
}
