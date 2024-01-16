import PacmanLoader from 'react-spinners/PacmanLoader';

import { theme } from '@/styles/Theme';

import { SpinnerWrapper } from './style';

export default function Spinner() {
  return (
    <SpinnerWrapper>
      <PacmanLoader color={theme.colors.primary} />
    </SpinnerWrapper>
  );
}
