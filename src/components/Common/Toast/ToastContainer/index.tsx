import { createPortal } from 'react-dom';

import { ToastWrapper } from './style';

interface ToastContainerProps {
  toasts: { id: string; content: string }[];
}

export default function ToastContainer({ toasts }: ToastContainerProps) {
  return createPortal(
    <ToastWrapper>
      {toasts.map((toast) => (
        <div key={toast.id}>{toast.content}</div>
      ))}
    </ToastWrapper>,
    document.body,
  );
}
