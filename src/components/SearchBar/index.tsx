import { css } from '@emotion/react';
import { SubmitHandler, useForm } from 'react-hook-form';

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

  const searchValue = watch('search');

  const { refetch } = useSearchAll(searchValue);

  const handleResetValue = () => {
    resetField('search');
    setFocus('search');
  };

  const onSubmit: SubmitHandler<SearchBarValues> = async () => {
    if (!searchValue?.trim()) return;

    const { data } = await refetch();

    if (onSearchResult) {
      onSearchResult(data ?? null);
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit(onSubmit)}>
      <SearchButton>
        <SearchIcon />
      </SearchButton>
      <HookFormInput
        name="search"
        register={register}
        placeholder="맛집 후기 또는 사용자 검색"
        css={css`
          width: 100%;
          height: 5rem;
          border: 1px solid #ddd;
          border-radius: 1.4rem;
          padding: 1rem 3rem 1rem;
        `}
      />
      <SearchCloseButton>
        {searchValue && (
          <CloseFilledIcon
            onClick={handleResetValue}
            css={css`
              width: 2rem;
              height: 2rem;
              z-index: 10;
              transform: translateY(-0.1rem);
            `}
          />
        )}
      </SearchCloseButton>
    </SearchForm>
  );
}
