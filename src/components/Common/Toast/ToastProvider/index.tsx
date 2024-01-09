import { createContext, useContext, useState } from 'react';

import ToastContainer from '../ToastContainer';

interface ToastContextProps {
  addToast: ({
    content,
    backgroundColor,
    position,
  }: {
    content: string;
    backgroundColor?: string;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  }) => void;
  removeToast: ({ id }: { id: string }) => void;
}

const ToastContext = createContext<ToastContextProps | null>(null);

export const useToast = () => {
  const toast = useContext(ToastContext);

  if (!toast) throw new Error('ToastProvider를 찾을 수 없습니다.');

  return toast;
};

export default function ToastProvider({ children }: React.PropsWithChildren) {
  const [toasts, setToasts] = useState<
    { id: string; content: string; backgroundColor?: string }[]
  >([]);

  const [position, setPosition] = useState<
    'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  >();

  const addToast = ({
    content,
    backgroundColor,
    position: newPosition,
  }: {
    content: string;
    backgroundColor?: string;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  }) => {
    setToasts((prev) => [
      ...prev,
      { id: Date.now().toString(), content, backgroundColor },
    ]);
    setPosition(newPosition);
  };

  const removeToast = ({ id }: { id: string }) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer toasts={toasts} position={position} />
      {children}
    </ToastContext.Provider>
  );
}
