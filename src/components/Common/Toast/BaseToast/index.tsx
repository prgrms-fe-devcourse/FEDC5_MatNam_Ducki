import { useRecoilValue } from 'recoil';

import { positionState } from '@/recoil/toast';

import { BaseToastWrapper } from './style';

interface BaseToastProps {
  index: number;
  backgroundColor?: string;
  children: React.ReactNode;
}
export default function BaseToast({
  index,
  backgroundColor,
  children,
}: BaseToastProps) {
  const position = useRecoilValue(positionState);
  return (
    <BaseToastWrapper
      backgroundColor={backgroundColor}
      position={position}
      index={index}>
      {children}
    </BaseToastWrapper>
  );
}
