import { BaseToastWrapper } from './style';

interface BaseToastProps {
  children: React.ReactNode;
}
export default function BaseToast({ children }: BaseToastProps) {
  // const style = {
  //   backgroundColor: backgroundColor || '#ffffff',
  // };

  return <BaseToastWrapper>{children}</BaseToastWrapper>;
}
