import { Global } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';

import ToastContainer from './components/Common/Toast/ToastContainer';
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
