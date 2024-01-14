import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

import { PATH } from '@/routes/path';

import ChevronLeftIcon from '../Icons/ChevronLeftIcon';

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
      Header.isBack = true;
      break;

    case PATH.PROFILE:
      Header.title = '내 정보';
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

const StyledTitleHeader = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  position: relative;
`;

const Title = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  cursor: pointer;
`;
