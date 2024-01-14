import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { useSearchAll } from '@/hooks/useSearch';
import { PATH } from '@/routes/path';
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
  disabled?: boolean;
  placeholder?: string;
  onSearchKeyword?: (keyword: string) => void;
  onSearchResult?: (result: SearchResultType) => void;
}

export default function SearchBar({
  disabled = false,
  placeholder,
  onSearchKeyword,
  onSearchResult,
}: SearchBarProps) {
  const { register, handleSubmit, watch, setFocus, resetField, setValue } =
    useForm<SearchBarValues>();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const searchValue = watch('search');
  const searchKeyword = searchValue?.trim();

  const { refetch } = useSearchAll(searchValue);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q');

  const handleResetValue = () => {
    resetField('search');
    setFocus('search');
    navigate({ pathname });
  };

  const onSubmit: SubmitHandler<SearchBarValues> = async () => {
    if (searchKeyword) {
      const { data } = await refetch();
      onSearchResult?.(data ?? null);
    } else {
      onSearchResult?.(null);
    }

    onSearchKeyword?.(searchKeyword);
  };

  useEffect(() => {
    if (searchKeyword === '') {
      navigate({ pathname });
    } else if (searchKeyword != null) {
      navigate({ pathname, search: `?q=${searchKeyword}` });
    }
  }, [searchKeyword]);

  useEffect(() => {
    if (searchQuery != null) {
      setValue('search', searchQuery);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery != null) {
      onSearchKeyword?.(searchQuery);
    }
  }, []);

  const handleFormClick = () => {
    navigate(PATH.SEARCH.POST);
  };

  return (
    <SearchForm onSubmit={handleSubmit(onSubmit)} onClick={handleFormClick}>
      <SearchButton>
        <PlaceIcon />
      </SearchButton>
      <HookFormInput
        name="search"
        register={register}
        placeholder={placeholder ?? '맛집 후기를 검색해 보세요!'}
        autoFocus={!disabled}
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
