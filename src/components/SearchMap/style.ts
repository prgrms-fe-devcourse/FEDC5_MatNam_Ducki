import styled from '@emotion/styled';

export const SearchResultWrapper = styled.div`
  width: 100%;
  height: 50%;
  overflow: auto;
  position: absolute;
  top: 50%;
  left: 0;
`;

export const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SearchKeywordWrapper = styled.div`
  width: 100%;
  max-width: 37.5rem;
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: ${({ theme }) => theme.colors.gray};
  background-color: #fff;
  padding: 1rem 2rem;
  border-bottom: 1px solid ${({ theme }) => `${theme.colors.lightGray}`};
`;

export const SearchKeyword = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
`;
