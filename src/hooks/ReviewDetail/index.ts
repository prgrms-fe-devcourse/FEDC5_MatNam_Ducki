import { useQuery } from '@tanstack/react-query';

import { getPostDetail } from '@/services/Post/post';
import { Post } from '@/types/response';

export const useGetDetail = ({ postId }: { postId: string }) => {
  return useQuery<Post>({
    queryKey: ['post'],
    queryFn: () => getPostDetail(postId),
  });
};

export const useLike = () => {};

export const useCreateComment = () => {};
