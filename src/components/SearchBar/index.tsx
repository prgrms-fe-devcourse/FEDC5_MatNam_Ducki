import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

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
  searchIcon?: React.ReactNode;
  disabled?: boolean;
  placeholder?: string;
  navigatePath?: string;
  onSearchKeyword?: (keyword: string) => void;
}

export default function SearchBar({
  searchIcon,
  disabled = false,
  placeholder,
  navigatePath,
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
  };

  const onSubmit: SubmitHandler<SearchBarValues> = () => {
    onSearchKeyword?.(searchKeyword);
  };

  useEffect(() => {
    if (searchKeyword === '') {
      navigate({ pathname }, { replace: true });
    } else if (searchKeyword != null) {
      navigate({ pathname, search: `?q=${searchKeyword}` }, { replace: true });
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
    if (navigatePath) {
      navigate(navigatePath);
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit(onSubmit)} onClick={handleFormClick}>
      <SearchButton>{searchIcon ?? <PlaceIcon />}</SearchButton>
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
