import { createPortal } from 'react-dom';

import BaseToast from '../BaseToast';
import { ToastWrapper } from './style';

interface ToastContainerProps {
  toasts: { id: string; content: string }[];
}

export default function ToastContainer({ toasts }: ToastContainerProps) {
  return createPortal(
    <ToastWrapper>
      {toasts.map((toast) => (
        <BaseToast key={toast.id} id={toast.id}>
          {toast.content}
        </BaseToast>
      ))}
    </ToastWrapper>,
    document.body,
  );
}
