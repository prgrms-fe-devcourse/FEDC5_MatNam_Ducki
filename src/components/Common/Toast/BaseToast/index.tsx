import { BaseToastWrapper } from './style';

interface BaseToastProps {
  backgroundColor?: string;
  children: React.ReactNode;
}
export default function BaseToast({
  backgroundColor,
  children,
}: BaseToastProps) {
  return (
    <BaseToastWrapper backgroundColor={backgroundColor}>
      {children}
    </BaseToastWrapper>
  );
}
