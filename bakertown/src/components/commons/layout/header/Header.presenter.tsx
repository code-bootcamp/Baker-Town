import * as S from "./Header.styles";
import { IHeaderProps } from "./Header.types";

const HeaderPresenter = (props: IHeaderProps) => {
  return (
    <>
      <S.Wrapper>
        <S.InnerWrapper>
          <S.InnerLogo>
            <S.Img className="Image" alt="logo" src="/imgs/logo.png" />
          </S.InnerLogo>
          <S.ClassTitle>CLASS</S.ClassTitle>
          <S.StoreTitle>STORE</S.StoreTitle>
          <S.SeacrchBar>검색</S.SeacrchBar>
          <S.HeartButton>❤</S.HeartButton>
          <S.SinInButton>로그인</S.SinInButton>
        </S.InnerWrapper>
      </S.Wrapper>
    </>
  );
};

export default HeaderPresenter;
