import 'react-toastify/dist/ReactToastify.css';

import { Global } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { router } from './routes';
import { reset } from './styles/Global';

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
      <Global styles={reset} />
    </>
  );
}

export default App;
