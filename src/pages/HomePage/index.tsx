import AnimationContainer from '@/components/Common/AnimationContainer';
import SearchBar from '@/components/SearchBar';
import { PATH } from '@/routes/path';

import ReviewList from '../ReviewList';
import { HomePageWrapper } from './style';

export default function HomePage() {
  return (
    <AnimationContainer>
      <HomePageWrapper>
        <SearchBar disabled navigatePath={PATH.SEARCH.POST} />
        <ReviewList />
      </HomePageWrapper>
    </AnimationContainer>
  );
}
