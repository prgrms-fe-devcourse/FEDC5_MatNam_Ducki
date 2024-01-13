import { createBrowserRouter } from 'react-router-dom';

import ReviewDetail from '@/pages/ReviewDetailPage';
import SignInPage from '@/pages/SignInPage/SignInPage';

import MainPage from '../pages/MainPage';
import NotificationPage from '../pages/NotificationPage';
import ProfilePage from '../pages/ProfilePage';
import ReviewList from '../pages/ReviewList';
import ReviewPage from '../pages/ReviewPage';
import SearchPage from '../pages/SearchPage';
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
        path: PATH.SEARCH,
        element: <SearchPage />,
      },
      {
        path: PATH.REVIEW,
        element: <ReviewPage />,
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
