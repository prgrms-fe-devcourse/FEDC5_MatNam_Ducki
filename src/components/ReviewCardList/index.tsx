import { useNavigate } from 'react-router-dom';

import { PATH } from '@/routes/path';
import { Post } from '@/types/response';

import { ReviewCard } from '../ReviewCard/ReviewCard';

interface PostListProps {
  posts: Post[] | null;
}

export const ReviewCardList = ({ posts }: PostListProps) => {
  const navigate = useNavigate();
  if (!posts) return <div>Post가 없습니다</div>;

  return (
    <ul>
      {posts.map((post) => (
        <ReviewCard
          key={post._id}
          imageUrl={post.image}
          profileName={post.author.fullName}
          content={post.title}
          createdAt={post.createdAt}
          likes={post.likes.length}
          onClick={() => navigate(`${PATH.REVIEWDETAIL}/${post._id}`)}
        />
      ))}
    </ul>
  );
};
