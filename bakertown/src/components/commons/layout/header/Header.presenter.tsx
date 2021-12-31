import * as S from "./Header.styles";
import { IHeaderProps } from "./Header.types";

const HeaderPresenter = (props: IHeaderProps) => {
  return (
    <>
      <S.Wrapper>
        <S.InnerWrapper>
          <S.InnerLogo onClick={props.logo}>
            <S.Img className="Image" alt="logo" src="/imgs/logo.png" />
          </S.InnerLogo>
          <S.ClassTitle onClick={props.class}>CLASS</S.ClassTitle>
          <S.StoreTitle>STORE</S.StoreTitle>
          <S.SeacrchBar onChange={props.keyWord} placeholder={"검색"} />
          <button onClick={props.search}></button>
          <S.HeartButton>❤</S.HeartButton>
          <S.SinInButton>로그인</S.SinInButton>
        </S.InnerWrapper>
      </S.Wrapper>
    </>
  );
};

export default HeaderPresenter;
