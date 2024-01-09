import { createContext, useContext, useState } from 'react';

import ToastContainer from '../ToastContainer';

interface ToastContextProps {
  addToast: ({ content }: { content: string }) => void;
  removeToast: ({ id }: { id: string }) => void;
}

const ToastContext = createContext<ToastContextProps | null>(null);

export const useToast = () => {
  const toast = useContext(ToastContext);

  if (!toast) throw new Error('ToastProvider를 찾을 수 없습니다.');

  return toast;
};

export default function ToastProvider({ children }: React.PropsWithChildren) {
  const [toasts, setToasts] = useState<{ id: string; content: string }[]>([]);

  const addToast = ({ content }: { content: string }) => {
    setToasts((prev) => [...prev, { id: Date.now().toString(), content }]);
  };

  const removeToast = ({ id }: { id: string }) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  );
}
