import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { createComment } from '@/services/Post/comment';
import { getPostDetail } from '@/services/Post/post';

const detailPageKey = {
  getDetail: ['post'] as const,
};

export const useGetDetail = ({ postId }: { postId: string }) => {
  return useQuery({
    queryKey: detailPageKey.getDetail,
    queryFn: () => getPostDetail(postId),
  });
};

export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: detailPageKey.getDetail,
    mutationFn: createComment,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['post'] });
    },
  });
};

export const useLike = () => {};
