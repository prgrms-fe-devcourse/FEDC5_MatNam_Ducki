import { createBrowserRouter } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import NotificationPage from '../pages/NotificationPage';
import ProfilePage from '../pages/ProfilePage';
import ReviewDetail from '../pages/ReviewDetail';
import ReviewList from '../pages/ReviewList';
import ReviewPage from '../pages/ReviewPage';
import SearchPage from '../pages/SearchPage';
import SigninPage from '../pages/SigninPage';
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
        element: <SigninPage />,
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
        path: PATH.REVIEWDETAIL,
        element: <ReviewDetail />,
      },
      {
        path: PATH.PROFILE,
        element: <ProfilePage />,
      },
      {
        path: PATH.NOTIFICATION,
        element: <NotificationPage />,
      },
    ],
  },
]);
