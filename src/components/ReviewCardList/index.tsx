import { Post } from '@/types/response';

import { ReviewCard } from '../ReviewCard/ReviewCard';

interface PostListProps {
  posts: Post[] | undefined | null;
}

export const ReviewCardList = ({ posts }: PostListProps) => {
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
        />
      ))}
    </ul>
  );
};
