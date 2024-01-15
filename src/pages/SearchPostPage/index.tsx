import { useState } from 'react';

import SearchBar from '@/components/SearchBar';
import { SearchResultType } from '@/types/response';

import ReviewList from '../ReviewList';
import {
  PopularKeyword,
  SearchKeyword,
  SearchKeywordWrapper,
  SearchPostPageWrapper,
} from './style';
import PopularSearch from '@/components/PopularSearch';

export default function SearchPostPage() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResult, setSearchResult] = useState<SearchResultType>(null);

  return (
    <SearchPostPageWrapper>
      <SearchBar
        onSearchKeyword={setSearchKeyword}
        onSearchResult={setSearchResult}
      />
      {searchResult ? (
        <>
          <SearchKeywordWrapper>
            <SearchKeyword>{searchKeyword} 검색 결과</SearchKeyword>
          </SearchKeywordWrapper>
          <ReviewList />
        </>
      ) : (
        <PopularSearch />
      )}
    </SearchPostPageWrapper>
  );
}
