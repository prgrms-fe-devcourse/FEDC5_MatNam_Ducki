import styled from '@emotion/styled';
import { memo } from 'react';

import { useGetChannels } from '@/hooks/useGetChannel';

import { Badge } from '../Badge/Badge';

interface ChannelListProps {
  handleClick: (channelId: string) => void;
  channelId: string;
}

const ChannelSection = styled.section`
  display: inline-flex;
  gap: 0.5rem;
`;

export const ChannelList = memo(
  ({ handleClick, channelId }: ChannelListProps) => {
    const { data: channels } = useGetChannels();
    return (
      <ChannelSection>
        {channels?.map((channel) => (
          <Badge
            onClick={() => handleClick(channel._id)}
            variant={channelId === channel._id ? 'subtle' : 'outline'}
            key={channel._id}>
            {channel.name}
          </Badge>
        ))}
      </ChannelSection>
    );
  },
);
