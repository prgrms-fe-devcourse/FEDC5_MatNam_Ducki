import { useEffect, useState } from 'react';

import PopularSearch from '@/components/PopularSearch';
import { ReviewCardList } from '@/components/ReviewCardList';
import SearchBar from '@/components/SearchBar';
import { useSearchAll } from '@/hooks/useSearch';

import {
  EmptyResultText,
  EmptyResultWrapper,
  SearchKeyword,
  SearchKeywordWrapper,
  SearchPostPageWrapper,
} from './style';

export default function SearchPostPage() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const { data, refetch } = useSearchAll(searchKeyword);

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
          <>
            {postResult.length !== 0 ? (
              <ReviewCardList posts={postResult} />
            ) : (
              <EmptyResultWrapper>
                <EmptyResultText>
                  아직 후기가 없나봐요 👀
                  <EmptyResultText>
                    다른 키워드로 검색해 보세요!
                  </EmptyResultText>
                </EmptyResultText>
              </EmptyResultWrapper>
            )}
          </>
        </>
      ) : (
        <PopularSearch />
      )}
    </SearchPostPageWrapper>
  );
}
