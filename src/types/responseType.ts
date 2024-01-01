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
