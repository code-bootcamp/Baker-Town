import { useAuth } from "../../../../../pages/_app";
import AvatarPage from "../../avatar/AvatarPage";
import * as S from "./Header.styles";
import { IHeaderProps } from "./Header.types";

const HeaderPresenter = (props: IHeaderProps) => {
  const currentuser: any = useAuth();

  return (
    <>
      <S.Wrapper>
        {/* <S.InnerWrapper> */}
        <S.InnerLogo onClick={props.logo}>
          <S.Img className="Image" alt="logo" src="/imgs/logo.png" />
        </S.InnerLogo>
        <S.ClassTitle onClick={props.class} isBold={props.isBoldClass}>
          CLASS
        </S.ClassTitle>
        <S.StoreTitle onClick={props.store} isBold={props.isBoldStore}>
          STORE
        </S.StoreTitle>
        <S.RoundDiv>
          <S.RoundDivInnerText
            placeholder="어떤 클래스를 원하세요?"
            onChange={props.keyWord}
            onKeyUp={props.enterKey}
          />
          <S.RoundDivCircle>
            <S.RoundDivInnerIcon
              src="/imgs/landing/searchicon01.png"
              onClick={props.search}
            />
          </S.RoundDivCircle>
        </S.RoundDiv>
        <S.HeartToLogin>
          <S.HeartRoundDivCircle>
            <S.HeartFilled
              src="/imgs/landing/heart01.png"
              onClick={props.heartClass}
            />
          </S.HeartRoundDivCircle>
          {props.currentUser?.uid ? (
            <AvatarPage />
          ) : (
            <S.LoginText onClick={props.signIn}>로그인 </S.LoginText>
          )}
        </S.HeartToLogin>
        {/* </S.InnerWrapper> */}
      </S.Wrapper>
    </>
  );
};

export default HeaderPresenter;
