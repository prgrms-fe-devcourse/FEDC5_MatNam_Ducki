import styled from '@emotion/styled';

import { useGetChannels } from '@/hooks/useGetChannel';

import { Badge } from '../Badge/Badge';

const ChannelSection = styled.section`
  display: inline-flex;
  gap: 0.5rem;
`;

export const ChannelList = () => {
  const { data: channels } = useGetChannels();
  return (
    <ChannelSection>
      {channels?.map((channel) => (
        <Badge key={channel._id}>{channel.name}</Badge>
      ))}
    </ChannelSection>
  );
};
