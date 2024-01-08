import { useQuery } from '@tanstack/react-query';

import { getAllChannels, getChannel } from '@/services/Channel/channel';

const channelKeys = {
  all: ['channels'] as const,
  channel: (channelName: string) => ['channel', channelName] as const,
};

export const useGetChannels = () => {
  // 채널 목록을 가져옵니다.
  return useQuery({
    queryKey: channelKeys.all,
    queryFn: getAllChannels,
  });
};

export const useGetChannel = (channelName: string) => {
  // 채널 이름을 받아서 해당 채널의 정보를 가져옵니다.
  return useQuery({
    queryKey: channelKeys.channel(channelName),
    queryFn: () => getChannel(channelName),
  });
};
