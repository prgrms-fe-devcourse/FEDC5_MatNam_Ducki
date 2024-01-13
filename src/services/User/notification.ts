import { SendNotificationsPayload } from '@/types/payload';
import { Notification } from '@/types/response';

import { axiosAuthInstance } from '../axiosInstance';
import { ENDPOINT } from '../endPoint';

export const getNotifications = async () => {
  try {
    const response = await axiosAuthInstance.get<Notification>(
      ENDPOINT.NOTIFICATIONS.ALL,
    );

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const seenNotifications = async () => {
  try {
    await axiosAuthInstance.put(ENDPOINT.NOTIFICATIONS.SEEN);
  } catch (error) {
    console.error(error);
  }
};

/**
 * @description 상대방에게 알림을 보냅니다.
 * @param notificationType 'COMMENT' | 'FOLLOW' | 'LIKE' | 'MESSAGE'
 * @param notificationTypeId type에 해당하는 객체의 id를 넣어주세요.
 * ex) COMMENT: 댓글 id | FOLLOW: 팔로우 id | LIKE: 좋아요 id | MESSAGE: 메시지 id
 * @exception type이 FOLLOW일 경우엔 postId는 null로 보내주세요.
 */

export const sendNotifications = async ({
  notificationType,
  notificationTypeId,
  userId,
  postId,
}: SendNotificationsPayload) => {
  try {
    const response = await axiosAuthInstance.post<Notification>(
      ENDPOINT.NOTIFICATIONS.CREATE,
      {
        notificationType,
        notificationTypeId,
        userId,
        postId,
      },
    );

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
