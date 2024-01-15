import { useEffect, useState } from 'react';

import SearchBar from '@/components/SearchBar';

import {
  SearchKeyword,
  SearchKeywordWrapper,
  SearchPostPageWrapper,
} from './style';
import PopularSearch from '@/components/PopularSearch';
import { ReviewCardList } from '@/components/ReviewCardList';
import EmptySearchResult from '@/components/Common/EmptySearchResult';
import { useSearchAll } from '@/hooks/useSearch';

export default function SearchPostPage() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const { data, refetch, isLoading } = useSearchAll(searchKeyword);

  const postResult = data?.postData ?? [];

  useEffect(() => {
    if (searchKeyword) {
      refetch();
    }
  }, [searchKeyword]);

  return (
    <SearchPostPageWrapper>
      <SearchBar onSearchKeyword={setSearchKeyword} />
      {searchKeyword ? (
        <>
          <SearchKeywordWrapper>
            <SearchKeyword>{searchKeyword} 검색 결과</SearchKeyword>
          </SearchKeywordWrapper>
          {isLoading ? (
            <span>로딩 중..</span>
          ) : (
            <>
              {postResult.length !== 0 ? (
                <ReviewCardList posts={postResult} />
              ) : (
                <EmptySearchResult />
              )}
            </>
          )}
        </>
      ) : (
        <PopularSearch />
      )}
    </SearchPostPageWrapper>
  );
}
