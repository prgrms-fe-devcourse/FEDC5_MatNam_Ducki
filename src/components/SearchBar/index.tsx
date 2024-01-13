import { css } from '@emotion/react';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useSearchAll } from '@/hooks/useSearch';
import { SearchResultType } from '@/types/response';

import HookFormInput from '../Common/HookFormInput';
import CloseFilledIcon from '../Common/Icons/CloseFilledIcon';
import SearchIcon from '../Common/Icons/SearchIcon';
import { SearchButton, SearchCloseButton, SearchForm } from './style';

interface SearchBarValues {
  search: string;
}

interface SearchBarProps {
  onSearchResult?: (result: SearchResultType) => void;
}

export default function SearchBar({ onSearchResult }: SearchBarProps) {
  const { register, handleSubmit, watch, setFocus, resetField, setValue } =
    useForm<SearchBarValues>();

  const navigate = useNavigate();

  const searchValue = watch('search');

  const { refetch } = useSearchAll(searchValue);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q');

  const handleResetValue = () => {
    resetField('search');
    setFocus('search');
    navigate({ pathname: '/search' });
  };

  const onSubmit: SubmitHandler<SearchBarValues> = async () => {
    if (!searchValue?.trim()) return;

    const { data } = await refetch();

    if (onSearchResult) {
      onSearchResult(data ?? null);
    }
  };

  useEffect(() => {
    if (searchValue != null) {
      navigate({ pathname: '/search', search: `?q=${searchValue}` });
    }
  }, [searchValue]);

  useEffect(() => {
    if (searchQuery != null) {
      setValue('search', searchQuery);
    }
  }, [searchQuery]);

  return (
    <SearchForm onSubmit={handleSubmit(onSubmit)}>
      <SearchButton>
        <SearchIcon />
      </SearchButton>
      <HookFormInput
        name="search"
        register={register}
        placeholder="맛집 후기 또는 사용자 검색"
        css={inputStyle}
      />
      <SearchCloseButton>
        {searchValue && (
          <CloseFilledIcon
            onClick={handleResetValue}
            css={closeFilledIconStyle}
          />
        )}
      </SearchCloseButton>
    </SearchForm>
  );
}

const inputStyle = css`
  width: 100%;
  height: 5rem;
  border: 1px solid #ddd;
  border-radius: 1.4rem;
  padding: 1rem 3rem 1rem;
`;

const closeFilledIconStyle = css`
  width: 2rem;
  height: 2rem;
  z-index: 10;
  transform: translateY(-0.1rem);
`;
