import { useQuery } from '@tanstack/react-query';

import { getPostByChannel } from '@/services/Post/post';
import { GetPostByChannelPayload } from '@/types/payload';

export const useGetPostByChannel = ({
  channelId,
  limit = 5,
  offset = 0,
}: GetPostByChannelPayload) => {
  return useQuery({
    queryKey: ['postsByChannel', channelId, limit, offset],
    queryFn: () => getPostByChannel({ channelId, limit, offset }),
    retry: false,
  });
};
