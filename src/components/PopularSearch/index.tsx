import SearchIcon from '../Common/Icons/SearchIcon';
import {
  IconWrapper,
  PopularSearchContainer,
  ResultItem,
  ResultList,
  Title,
} from './style';

interface SearchResult {
  id: number;
  word: string;
}

const words = [
  '강남',
  '곱도리탕',
  '성수',
  '건대',
  '일식',
  '홍대',
  '칵테일',
  '치킨',
  '잠실',
];

const searchResults: SearchResult[] = words.map((word, index) => ({
  id: index + 1,
  word,
}));

export default function PopularSearch() {
  return (
    <PopularSearchContainer>
      <Title>인기 검색어</Title>
      <ResultList>
        {searchResults.map((result) => (
          <ResultItem key={result.id}>
            <IconWrapper>
              <SearchIcon />
            </IconWrapper>
            {result.word}
          </ResultItem>
        ))}
      </ResultList>
    </PopularSearchContainer>
  );
}
