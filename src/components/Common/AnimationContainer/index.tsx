import { defaultMotionProps, fadeInTranstiion } from '@/constants/animation';

import { AnimationWrapper } from './style';

export default function AnimationContainer({
  children,
}: React.ComponentProps<'div'>) {
  return (
    <AnimationWrapper {...defaultMotionProps} variants={fadeInTranstiion}>
      {children}
    </AnimationWrapper>
  );
}
