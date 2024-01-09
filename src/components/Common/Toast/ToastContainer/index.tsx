import { createPortal } from 'react-dom';

import BaseToast from '../BaseToast';
import { ToastWrapper } from './style';

interface ToastContainerProps {
  toasts: { id: string; content: string; backgroundColor?: string }[];
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export default function ToastContainer({
  toasts,
  position,
}: ToastContainerProps) {
  return createPortal(
    <ToastWrapper position={position}>
      {toasts.map((toast) => (
        <BaseToast
          key={toast.id}
          id={toast.id}
          backgroundColor={toast.backgroundColor}>
          {toast.content}
        </BaseToast>
      ))}
    </ToastWrapper>,
    document.body,
  );
}
