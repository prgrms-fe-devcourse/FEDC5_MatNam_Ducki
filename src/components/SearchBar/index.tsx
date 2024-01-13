import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useSearchAll } from '@/hooks/useSearch';
import { SearchResultType } from '@/types/response';

import HookFormInput from '../Common/HookFormInput';
import CloseFilledIcon from '../Common/Icons/CloseFilledIcon';
import PlaceIcon from '../Common/Icons/PlaceIcon';
import {
  closeFilledIconStyle,
  inputStyle,
  SearchButton,
  SearchCloseButton,
  SearchForm,
} from './style';

interface SearchBarValues {
  search: string;
}

interface SearchBarProps {
  onSearchKeyword?: (keyword: string) => void;
  onSearchResult?: (result: SearchResultType) => void;
}

export default function SearchBar({
  onSearchKeyword,
  onSearchResult,
}: SearchBarProps) {
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
    const searchKeyword = searchValue?.trim();
    if (!searchKeyword) return;

    const { data } = await refetch();

    if (onSearchKeyword) {
      onSearchKeyword(searchKeyword);
    }

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

  useEffect(() => {
    if (searchQuery && onSearchKeyword) {
      onSearchKeyword(searchQuery);
    }
  }, []);

  return (
    <SearchForm onSubmit={handleSubmit(onSubmit)}>
      <SearchButton>
        <PlaceIcon />
      </SearchButton>
      <HookFormInput
        name="search"
        register={register}
        placeholder="맛집 검색"
        autoFocus
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
