import { Global } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes';
import { reset } from './styles/Global';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Global styles={reset} />
    </>
  );
}

export default App;
