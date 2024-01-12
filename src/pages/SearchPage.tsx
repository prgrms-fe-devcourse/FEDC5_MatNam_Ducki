import { useState } from 'react';

import PopularSearch from '@/components/PopularSearch/PopularSearch';
import SearchBar from '@/components/SearchBar';
import { SearchResultType } from '@/types/response';

export default function SearchPage() {
  const [searchResult, setSearchResult] = useState<SearchResultType>(null);

  const handleSearchResult = (result: SearchResultType) => {
    setSearchResult(result);
  };

  return (
    <>
      <SearchBar onSearchResult={handleSearchResult} />
      <PopularSearch />
    </>
  );
}
