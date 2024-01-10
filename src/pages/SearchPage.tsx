import { useState } from 'react';

import SearchBar from '@/components/SearchBar';
import { SearchResultType } from '@/types/response';

export default function SearchPage() {
  const [searchResult, setSearchResult] = useState<SearchResultType>(null);

  const handleSearchResult = (result: SearchResultType) => {
    setSearchResult(result);
  };

  return (
    <div>
      <SearchBar onSearchResult={handleSearchResult} />
    </div>
  );
}
