import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SearchForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 10;
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  left: 1.6rem;
  transform: translateY(-50%);
  z-index: 10;
`;

export const SearchCloseButton = styled.button`
  display: flex;
  gap: 0.5rem;
  position: absolute;
  top: 50%;
  right: 1.6rem;
  transform: translateY(-50%);
`;

export const inputStyle = css`
  width: 100%;
  height: 5rem;
  border: 1px solid #ddd;
  border-radius: 1.4rem;
  padding: 1rem 4.6rem 1rem;
`;

export const closeFilledIconStyle = css`
  width: 2rem;
  height: 2rem;
  z-index: 10;
  transform: translateY(-0.1rem);
`;
