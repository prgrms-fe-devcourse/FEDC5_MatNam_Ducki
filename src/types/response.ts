export interface UserReponse {
  user: User;
  token: string;
}

export interface User {
  _id: string;
  fullName: string;
  email: string;
  posts: Post[];
  likes: Like[];
  comments: string[];
  createdAt: string;
  updatedAt: string;
  role: string;
  emailVerified: boolean;
  banned: boolean;
  isOnline: boolean;
  followers: [];
  following: [
    {
      _id: string;
      user: string;
      follower: string;
      createdAt: string;
      updatedAt: string;
      __v: 0;
    },
  ];
  notifications: Notification[];
  messages: Message[];
  coverImage?: string;
  image?: string;
}

export interface Channel {
  _id: string;
  posts: string[];
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  authRequired?: boolean;
}

export interface Post {
  _id: string;
  likes: Like[];
  comments: Comment[];
  channel: Channel;
  author: User;
  createdAt: string;
  updatedAt: string;
  image?: string;
  imagePublicId?: string;
  title: string;
}

export interface Like {
  _id: string;
  user: string; // user id
  post: string; // post id
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  _id: string;
  comment: string;
  author: User;
  post: string; // post id
  createdAt: string;
  updatedAt: string;
}

export interface Notification {
  _id: string;
  seen: boolean;
  author: User;
  user: User | string;
  post: string | null; // post id
  follow?: string; // user id
  comment?: Comment;
  message?: string; // message id
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  _id: string;
  message: string;
  sender: User;
  receiver: User;
  seen: boolean;
  createdAt: string;
  updatedAt: string;
}
