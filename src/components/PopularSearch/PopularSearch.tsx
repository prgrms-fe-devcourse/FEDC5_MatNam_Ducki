import SearchIcon from '../Common/Icons/SearchIcon';
import { PopularSearchContainer, ResultItem, ResultList, Title } from './style';

interface SearchResult {
  id: number;
  word: string;
}

const searchResults: SearchResult[] = [
  { id: 1, word: '강남' },
  { id: 2, word: '곱도리탕' },
  { id: 3, word: '성수' },
  { id: 4, word: '건대' },
  { id: 5, word: '일식' },
  { id: 6, word: '홍대' },
  { id: 7, word: '칵테일' },
  { id: 8, word: 'Cookies' },
];

export default function PopularSearch() {
  return (
    <PopularSearchContainer>
      <Title>인기 검색어</Title>
      <ResultList>
        {searchResults.map((result) => (
          <ResultItem key={result.id}>
            <SearchIcon />
            {result.word}
          </ResultItem>
        ))}
      </ResultList>
    </PopularSearchContainer>
  );
}
