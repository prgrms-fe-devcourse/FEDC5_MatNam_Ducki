import { useState } from 'react';

import SearchBar from '@/components/SearchBar';
import SearchMap from '@/components/SearchMap';

import { SearchPageWrapper } from './style';

export default function SearchPage() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearchKeyword = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  return (
    <SearchPageWrapper>
      <SearchBar onSearchKeyword={handleSearchKeyword} />
      <SearchMap searchKeyword={searchKeyword} />
    </SearchPageWrapper>
  );
}
