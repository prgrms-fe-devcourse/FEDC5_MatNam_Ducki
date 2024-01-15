import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { PATH } from '@/routes/path';

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
}

export default function SearchBar({
  disabled = false,
  placeholder,
  onSearchKeyword,
}: SearchBarProps) {
  const { register, handleSubmit, watch, setFocus, resetField, setValue } =
    useForm<SearchBarValues>();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const searchValue = watch('search');
  const searchKeyword = searchValue?.trim();

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q');

  const handleResetValue = () => {
    resetField('search');
    setFocus('search');
    navigate({ pathname });
  };

  const onSubmit: SubmitHandler<SearchBarValues> = () => {
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
    if (disabled) {
      navigate(PATH.SEARCH.POST);
    }
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
