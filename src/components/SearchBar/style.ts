import styled from '@emotion/styled';

export const SearchForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 2rem;
`;

export const SearchButton = styled.button`
  position: absolute;
  left: 2.7rem;
  width: 2rem;
  height: 2rem;
  z-index: 10;
`;

export const SearchCloseButton = styled.button`
  display: flex;
  gap: 0.5rem;
  position: absolute;
  right: 2.8rem;
`;
