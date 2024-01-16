export const ENDPOINT = {
  /* auth */
  SIGNIN: '/login',
  SIGNUP: '/signUp',
  SIGNOUT: '/logout',
  AUTH_USER: '/auth-user',

  /* channel */
  CHANNELS: {
    ALL: '/channels',
    CHANNEL: (channelName: string) => `/channels/${channelName}`,
    CREATE: '/channels/create',
  },

  /* posts */
  POSTS: {
    CREATE: '/posts/create',
    UPDATE: '/posts/update',
    DELETE: '/posts/delete',
    POST: (postId: string) => `/posts/${postId}`,
    BY_CHANNEL_ID: (channelId: string) => `/posts/channel/${channelId}`,
    BY_USER_ID: (userId: string) => `/posts/author/${userId}`,
  },

  LIKES: {
    CREATE: '/likes/create',
    DELETE: '/likes/delete',
  },

  COMMENTS: {
    CREATE: '/comments/create',
    DELETE: '/comments/delete',
  },

  /* user */
  USERS: {
    GET_USERS: '/users/get-users',
    USER: (userId: string) => `/users/${userId}`,
    UPLOAD_PHOTO: '/users/upload-photo',
  },

  SETTINGS: {
    UPDATE_USER: '/settings/update-user',
    UPDATE_PASSWORD: '/settings/update-password',
  },

  /* search */
  SEARCH: {
    USERS: (query: string) => `/search/users/${query}`,
    ALL: (query: string) => `/search/all/${query}`,
  },

  /* notification */
  NOTIFICATIONS: {
    ALL: '/notifications',
    SEEN: '/notifications/seen',
    CREATE: '/notifications/create',
  },

  /* message */
  MESSAGES: {
    ALL: '/messages/conversations',
    USER: '/messages',
    CREATE: '/messages/create',
    UPDATE_SEEN: '/messages/update-seen',
  },
};
