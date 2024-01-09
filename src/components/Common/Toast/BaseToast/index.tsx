import { useToast } from '../ToastProvider';
import { BaseToastWrapper } from './style';

interface BaseToastProps {
  id: string;
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function BaseToast({
  id,
  children,
  backgroundColor,
}: BaseToastProps) {
  const style = {
    backgroundColor: backgroundColor || '#ffffff',
  };

  const { removeToast } = useToast();
  return (
    <BaseToastWrapper id={id} style={style}>
      {children}
      <button onClick={() => removeToast({ id })}>✖</button>
    </BaseToastWrapper>
  );
}
