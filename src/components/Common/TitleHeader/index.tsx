import { useLocation, useNavigate } from 'react-router-dom';

import { PATH } from '@/routes/path';

import ChevronLeftIcon from '../Icons/ChevronLeftIcon';
import LogoIcon from '../Icons/LogoIcon';
import {
  IconWrapper,
  LogoWrapper,
  StyledTitleHeader,
  Title,
  TitleWrapper,
} from './style';

export default function TitleHeader() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const Header = {
    title: '맛남의 길',
    isBack: true,
  };

  switch (`/${pathname.split('/')[1]}`) {
    case PATH.ROOT:
      Header.isBack = false;
      break;

    case PATH.SIGNIN:
      Header.title = '로그인';
      break;

    case PATH.SIGNUP:
      Header.title = '회원가입';
      break;

    case PATH.DIRECTMESSAGE:
      Header.title = '메세지함';
      Header.isBack = false;
      break;

    case PATH.REVIEW:
      Header.title = '후기 작성';
      Header.isBack = false;
      break;

    case PATH.PROFILE:
      Header.title = '프로필';
      Header.isBack = false;

      break;

    case PATH.NOTIFICATION:
      Header.title = '알림 목록';
      Header.isBack = false;
      break;

    case PATH.REVIEWDETAIL:
      Header.title = '';
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
      {Header.title && (
        <TitleWrapper>
          <LogoWrapper>
            <LogoIcon width={20} height={20} />
          </LogoWrapper>
          <Title>{Header.title}</Title>
        </TitleWrapper>
      )}
    </StyledTitleHeader>
  );
}
