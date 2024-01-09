import './index.css';

import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import App from './App.tsx';
import ToastProvider from './components/Common/Toast/ToastProvider/index.tsx';
import { theme } from './styles/Theme.ts';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1 },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <RecoilRoot>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
          </RecoilRoot>
        </ToastProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
