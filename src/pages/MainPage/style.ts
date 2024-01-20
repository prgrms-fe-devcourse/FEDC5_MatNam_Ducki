import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const MainPageWrapper = styled(motion.div)`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
`;

export const ScrollWrapper = styled.div`
  width: 100%;
  height: calc(100% - 14rem);
  overflow: auto;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 37.5rem;
  margin: auto;
`;
