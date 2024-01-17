import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const MainPageWrapper = styled(motion.div)`
  width: 100%;
  height: calc(100vh - 8rem);
  overflow: auto;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 37.5rem;
  height: calc(100% - 6rem);
  margin: auto;
`;
