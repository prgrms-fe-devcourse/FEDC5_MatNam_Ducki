import { useRecoilState } from 'recoil';

import { Toast, toastState } from '@/recoil/toast';

export function useToast() {
  const [toasts, setToasts] = useRecoilState(toastState);

  const addToast = (toast: Toast) => {
    setToasts((prev) => [...prev, { ...toast, id: Date.now().toString() }]);
  };

  const removeToast = (id: Toast['id']) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return { addToast, removeToast, toasts };
}
