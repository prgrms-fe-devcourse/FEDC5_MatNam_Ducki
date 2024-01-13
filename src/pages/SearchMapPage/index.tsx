import { useState } from 'react';

import SearchBar from '@/components/SearchBar';
import SearchMap from '@/components/SearchMap';

import { SearchMapPageWrapper } from './style';

export default function SearchMapPage() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearchKeyword = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  return (
    <SearchMapPageWrapper>
      <SearchBar onSearchKeyword={handleSearchKeyword} />
      <SearchMap searchKeyword={searchKeyword} />
    </SearchMapPageWrapper>
  );
}
