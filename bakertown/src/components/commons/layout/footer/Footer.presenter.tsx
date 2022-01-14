import * as S from "./Footer.styles";

const FooterPresenter = () => {
  return (
    <>
      <S.Wrapper>
        <S.InnerWrapper>
          <S.InnerLogo>
            <S.Img className="Image" alt="logo" src="/imgs/logo.png" />
          </S.InnerLogo>
          <S.FirstColumn>
            <S.ClassTitle>(주) BAKER TOWN</S.ClassTitle>
            <S.ClassTitle2>
              사업자등록번호 : 588-87-00922 | 대표 : 베이키 신고번호
              제2018-서울구로-1192호 서울특별시 구로구 동교동 203-30번지 3층
            </S.ClassTitle2>
          </S.FirstColumn>
          <S.SecondColumn>
            <S.FirstLabel>서비스 이용약관</S.FirstLabel>
            <S.SecondLabel>개인정보처리방침</S.SecondLabel>
          </S.SecondColumn>
          <S.SecondColumn>
            <S.FirstLabel>공지사항</S.FirstLabel>
            <S.SecondLabel>일반 / 제휴 문의</S.SecondLabel>
          </S.SecondColumn>
          <S.SecondColumn>
            <S.FirstLabel>인스타그램</S.FirstLabel>
            <S.SecondLabel>네이버</S.SecondLabel>
          </S.SecondColumn>
          <S.LastColumn>
            <S.SecondLabel>
              Copyright 2018. SSSDC. All rights reserved.
            </S.SecondLabel>
          </S.LastColumn>
        </S.InnerWrapper>
      </S.Wrapper>
    </>
  );
};

export default FooterPresenter;
