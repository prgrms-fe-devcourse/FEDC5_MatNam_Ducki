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
      <SearchBar
        placeholder="맛집을 검색해 보세요!"
        onSearchKeyword={handleSearchKeyword}
      />
      <SearchMap searchKeyword={searchKeyword} />
    </SearchMapPageWrapper>
  );
}
