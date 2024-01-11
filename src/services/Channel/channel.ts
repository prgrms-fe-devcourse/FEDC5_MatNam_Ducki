import { CreateChannelPayload } from '@/types/payload';
import { Channel } from '@/types/response';

import { axiosAuthInstance, axiosInstance } from '../axiosInstance';
import { ENDPOINT } from '../endPoint';

export const getAllChannels = async () => {
  try {
    const response = await axiosInstance.get<Channel[]>(ENDPOINT.CHANNELS.ALL);

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const getChannel = async (channelName: string) => {
  try {
    const response = await axiosInstance.get<Channel>(
      ENDPOINT.CHANNELS.CHANNEL(channelName),
    );

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * @description 채널 추가는 어드민 계정으로만 가능합니다. 포스트를 남기기 위해서 먼저 채널을 생성해야 합니다.
 */
export const createChannel = async ({
  authRequired,
  description,
  name,
}: CreateChannelPayload) => {
  try {
    await axiosAuthInstance.post(ENDPOINT.CHANNELS.CREATE, {
      authRequired,
      description,
      name,
    });
  } catch (error) {
    console.error(error);
  }
};
