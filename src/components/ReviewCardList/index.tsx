import { useNavigate } from 'react-router-dom';

import { PATH } from '@/routes/path';
import { Post } from '@/types/response';

import { ReviewCard } from '../ReviewCard/ReviewCard';
import { EmptyPostTitle, ReviewCardListWrapper } from './style';

interface PostListProps {
  posts: Post[] | null;
}

export const ReviewCardList = ({ posts }: PostListProps) => {
  const navigate = useNavigate();
  if (!posts) return <EmptyPostTitle>작성된 리뷰가 없습니다.</EmptyPostTitle>;

  return (
    <ReviewCardListWrapper>
      {posts.map((post) => (
        <ReviewCard
          key={post._id}
          imageUrl={post.image}
          profileName={post.author.fullName}
          restaurant={post.restaurant}
          location={post.location}
          review={post.review}
          createdAt={post.createdAt}
          likes={post.likes.length}
          channelId={post.channel._id}
          onClick={() => navigate(`${PATH.REVIEWDETAIL}/${post._id}`)}
          id={post.author._id}
        />
      ))}
    </ReviewCardListWrapper>
  );
};
