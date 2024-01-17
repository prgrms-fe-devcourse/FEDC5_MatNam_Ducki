import SearchBar from '@/components/SearchBar';
import { PATH } from '@/routes/path';

import ReviewList from '../ReviewList';

export default function HomePage() {
  return (
    <>
      <SearchBar disabled navigatePath={PATH.SEARCH.POST} />
      <ReviewList />
    </>
  );
}
