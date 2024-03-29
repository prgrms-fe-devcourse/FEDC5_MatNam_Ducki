export interface SignUpPayload {
  email: string;
  fullName: string;
  password: string;
}

export type SignInPayload = Omit<SignUpPayload, 'fullName'>;

export interface CreateChannelPayload {
  authRequired: boolean;
  description: string;
  name: string;
}

export interface CreateCommentPayload {
  comment: string;
  postId: string;
}

export interface SendNotificationsPayload {
  notificationType: string;
  notificationTypeId: string;
  userId: string;
  postId: string | null;
}

interface Pagination {
  offset?: number;
  limit?: number;
}

export interface GetPostByChannelPayload extends Pagination {
  channelId: string;
}

export interface GetPostByUserPayload extends Pagination {
  userId: string;
}

export interface UpdatePostPayload {
  postId: string;
  review: string;
  restaurant: string;
  location: string;
  openingTime: string;
  image: File | null;
  channelId: string;
  imageToDeletePublicId?: string | null;
}

export interface ReviewType {
  review: string;
  restaurant: string;
  location: string;
  openingTime: string;
  image: string | File | null;
  channelId: string;
  savedImage?: string | null;
  imagePublicId?: string | null;
  imageToDeletePublicId?: string | null;
}

export type CreatePostPayload = Omit<UpdatePostPayload, 'postId'>;

export interface UpdateUserNamePayload {
  fullName: string;
  username?: string;
}

export interface GetUsersPayload extends Pagination {}

export interface UpdateProfileImagePayload {
  image: File;
  isCover: boolean;
}
