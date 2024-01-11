import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { createComment } from '@/services/Post/comment';
import { createLike, deleteLike } from '@/services/Post/like';
import { getPostDetail } from '@/services/Post/post';

const detailPageKey = {
  post: (postId: string) => ['post', postId] as const,
};

export const useGetDetail = ({ postId }: { postId: string }) => {
  return useQuery({
    queryKey: detailPageKey.post(postId),
    queryFn: () => getPostDetail(postId),
    suspense: true,
  });
};

export const useCreateComment = ({ postId }: { postId: string }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createComment,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: detailPageKey.post(postId) });
    },
  });
};

export const useLike = ({
  postId,
  isLike,
}: {
  postId: string;
  isLike: boolean;
}) => {
  return useMutation({
    mutationFn: isLike ? () => createLike(postId) : () => deleteLike(postId),
  });
};
