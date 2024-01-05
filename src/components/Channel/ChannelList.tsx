import styled from '@emotion/styled';

import { Channel } from '@/types/response';

interface ChannelListProps {
  channelId: string;
}

const ChannelSection = styled.section`
  display: inline-flex;
  gap: 1rem;
`;

export const ChannelList = ({ channelId }: ChannelListProps) => {
  const channels: Channel[] = []; // react-query 사용해서 데이터 가져오기
  return (
    <ChannelSection>
      {channels.map((channel) => (
        <span key={channel._id}>{channel.name}</span>
      ))}
    </ChannelSection>
  );
};
