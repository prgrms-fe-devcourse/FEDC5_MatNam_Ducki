import { Global } from '@emotion/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from './pages/MainPage';
import NotificationPage from './pages/NotificationPage';
import ProfilePage from './pages/ProfilePage';
import ReviewDetail from './pages/ReviewDetail';
import ReviewList from './pages/ReviewList';
import ReviewPage from './pages/ReviewPage';
import SearchPage from './pages/SearchPage';
import SigninPage from './pages/SigninPage';
import SignUpPage from './pages/SignUpPage';
import { reset } from './styles/Global';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/signin',
    element: <SigninPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
  {
    path: '/review',
    element: <ReviewPage />,
  },
  {
    path: '/reviewlist',
    element: <ReviewList />,
  },
  {
    path: 'reviedetail',
    element: <ReviewDetail />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/notification',
    element: <NotificationPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Global styles={reset} />
    </>
  );
}

export default App;
