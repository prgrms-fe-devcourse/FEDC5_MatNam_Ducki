import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { createComment } from '@/services/Post/comment';
import { getPostDetail } from '@/services/Post/post';
import { Post } from '@/types/response';

export const useGetDetail = ({ postId }: { postId: string }) => {
  return useQuery<Post>({
    queryKey: ['post'],
    queryFn: () => getPostDetail(postId),
  });
};

export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['post'],
    mutationFn: createComment,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['post'] });
    },
  });
};

export const useLike = () => {};
