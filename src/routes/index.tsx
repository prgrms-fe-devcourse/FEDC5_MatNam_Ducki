import { createBrowserRouter } from 'react-router-dom';

import MainPage from '@/pages/MainPage';
import ReviewDetail from '@/pages/ReviewDetailPage';
import SearchPostPage from '@/pages/SearchPostPage';
import SignInPage from '@/pages/SignInPage';

import NotificationPage from '../pages/NotificationPage';
import ProfilePage from '../pages/ProfilePage';
import ReviewList from '../pages/ReviewList';
import ReviewPage from '../pages/ReviewPage';
import ReviewUpdatePage from '../pages/ReviewUpdatePage';
import SearchMapPage from '../pages/SearchMapPage';
import SignUpPage from '../pages/SignUpPage';
import TestPage from '../pages/TestPage';
import { PATH } from './path';

export const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <MainPage />,
    children: [
      {
        path: PATH.ROOT,
        element: <TestPage />,
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
        path: PATH.REVIEW,
        element: <ReviewPage />,
      },
      {
        path: PATH.REVIEWUPDATE,
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
    ],
  },
]);
