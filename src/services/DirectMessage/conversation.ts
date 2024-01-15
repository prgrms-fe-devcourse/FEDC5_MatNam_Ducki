import { Conversation, Message } from '@/types/response';

import { axiosAuthInstance } from '../axiosInstance';
import { ENDPOINT } from '../endPoint';

export const getAllConversations = async () => {
  try {
    const response = await axiosAuthInstance.get<Conversation[]>(
      ENDPOINT.MESSAGES.ALL,
    );

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getUserMessages = async (userId: string) => {
  try {
    const response = await axiosAuthInstance.get<Message[]>(
      ENDPOINT.MESSAGES.USER,
      {
        params: {
          userId,
        },
      },
    );

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

interface CreateMessageProps {
  message: string;
  receiver: string;
}

export const createMessage = async ({
  message,
  receiver,
}: CreateMessageProps) => {
  try {
    const response = await axiosAuthInstance.post<Message>(
      ENDPOINT.MESSAGES.CREATE,
      {
        message,
        receiver,
      },
    );

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateMessageSeen = async (sender: string) => {
  try {
    await axiosAuthInstance.put(ENDPOINT.MESSAGES.CREATE, {
      sender,
    });
  } catch (error) {
    console.error(error);
  }
};
