import * as S from "./Footer.styles";
import { IFooterProps } from "./Footer.types";

const FooterPresenter = (props: IFooterProps) => {
  return (
    <>
      <S.Wrapper>
        <S.InnerWrapper>
          <S.InnerLogo>
            <S.Img className="Image" alt="logo" src="/imgs/logo.png" />
          </S.InnerLogo>
          <S.ClassTitle>(주) BAKER TOWN</S.ClassTitle>
          <S.ClassTitle2>
            사업자등록번호 : 588-87-00966 | 대표 : 정영원 통신판매업 : 신고번호
            제2018-서울마포-1192호 서울특별시 마포구 동교동 203-30번지 3층
          </S.ClassTitle2>
          {/* <S.SeacrchBar>검색</S.SeacrchBar>
          <S.HeartButton>♡</S.HeartButton>
          <S.SinInButton>로그인</S.SinInButton> */}
        </S.InnerWrapper>
      </S.Wrapper>
    </>
  );
};

export default FooterPresenter;
