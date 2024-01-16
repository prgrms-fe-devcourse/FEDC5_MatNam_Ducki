import { useLocation, useNavigate } from 'react-router-dom';

import { PATH } from '@/routes/path';

import ChevronLeftIcon from '../Icons/ChevronLeftIcon';
import { IconWrapper, StyledTitleHeader, Title } from './style';

export default function TitleHeader() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const Header = {
    title: '맛남의 길',
    isBack: false,
  };

  switch (`/${pathname.split('/')[1]}`) {
    case PATH.SIGNIN:
      Header.title = '로그인';
      Header.isBack = true;
      break;

    case PATH.SIGNUP:
      Header.title = '회원가입';
      Header.isBack = true;
      break;

    case PATH.REVIEW:
      Header.title = '후기 작성';
      break;

    case PATH.PROFILE:
      Header.title = '프로필';
      break;

    case PATH.NOTIFICATION:
      Header.title = '알림 목록';
      break;

    case PATH.REVIEWDETAIL:
      Header.title = '';
      Header.isBack = true;
      break;

    default:
  }

  return (
    <StyledTitleHeader>
      {Header.isBack && (
        <IconWrapper onClick={() => navigate(-1)}>
          <ChevronLeftIcon />
        </IconWrapper>
      )}

      <Title>{Header.title}</Title>
    </StyledTitleHeader>
  );
}
