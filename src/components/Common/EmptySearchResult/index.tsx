import {
  EmptySearchResultWrapper,
  EmptySearchSuggestText,
  EmptySearchText,
} from './style';

export default function EmptySearchResult(props: React.ComponentProps<'div'>) {
  return (
    <EmptySearchResultWrapper {...props}>
      <EmptySearchText>
        검색 결과가 없습니다 👀
        <EmptySearchSuggestText>
          다른 키워드로 검색해 보세요!
        </EmptySearchSuggestText>
      </EmptySearchText>
    </EmptySearchResultWrapper>
  );
}
