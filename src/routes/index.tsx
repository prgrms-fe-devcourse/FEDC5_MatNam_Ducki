import { createBrowserRouter } from 'react-router-dom';

import DirectMessagePage from '@/pages/DirectMessagePage';
import DetailMessagePage from '@/pages/DirectMessagePage/DetailMessagePage';
import HomePage from '@/pages/HomePage';
import MainPage from '@/pages/MainPage';
import NotFoundPage from '@/pages/NotFoundPage';
import ReviewDetail from '@/pages/ReviewDetailPage';
import SearchPostPage from '@/pages/SearchPostPage';
import SearchUserPage from '@/pages/SearchUserPage';
import SignInPage from '@/pages/SignInPage';

import NotificationPage from '../pages/NotificationPage';
import ProfilePage from '../pages/ProfilePage';
import ReviewList from '../pages/ReviewList';
import ReviewPage from '../pages/ReviewPage';
import ReviewUpdatePage from '../pages/ReviewUpdatePage';
import SearchMapPage from '../pages/SearchMapPage';
import SignUpPage from '../pages/SignUpPage';
import { PATH } from './path';

export const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <MainPage />,
    children: [
      {
        path: PATH.ROOT,
        element: <HomePage />,
      },
      {
        path: PATH.SIGNIN,
        element: <SignInPage />,
      },
      {
        path: PATH.SIGNUP,
        element: <SignUpPage />,
      },
      {
        path: PATH.SEARCH.MAP,
        element: <SearchMapPage />,
      },
      {
        path: PATH.SEARCH.POST,
        element: <SearchPostPage />,
      },
      {
        path: PATH.SEARCH.USER,
        element: <SearchUserPage />,
      },
      {
        path: PATH.REVIEW,
        element: <ReviewPage />,
      },
      {
        path: `${PATH.REVIEWUPDATE}/:postId`,
        element: <ReviewUpdatePage />,
      },
      {
        path: PATH.REVIEWLIST,
        element: <ReviewList />,
      },
      {
        path: `${PATH.REVIEWDETAIL}/:postId`,
        element: <ReviewDetail />,
      },
      {
        path: `${PATH.PROFILE}/:userId`,
        element: <ProfilePage />,
      },
      {
        path: PATH.NOTIFICATION,
        element: <NotificationPage />,
      },
      {
        path: PATH.DIRECTMESSAGE,
        element: <DirectMessagePage />,
      },
      {
        path: `${PATH.DIRECTMESSAGE}/:userId`,
        element: <DetailMessagePage />,
      },
      {
        path: PATH.NOTFOUND,
        element: <NotFoundPage />,
      },
    ],
  },
]);
