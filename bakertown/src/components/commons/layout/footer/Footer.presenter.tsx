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
        </S.InnerWrapper>
      </S.Wrapper>
    </>
  );
};

export default FooterPresenter;
