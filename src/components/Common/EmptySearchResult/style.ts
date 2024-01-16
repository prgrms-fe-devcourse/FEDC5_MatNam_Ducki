import styled from '@emotion/styled';

export const EmptySearchResultWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
  transform: translateY(-1.5rem);
`;

export const EmptySearchText = styled.div``;

export const EmptySearchSuggestText = styled.div`
  margin-top: 1rem;
`;
