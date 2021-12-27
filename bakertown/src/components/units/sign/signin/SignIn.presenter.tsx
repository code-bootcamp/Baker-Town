import * as S from "./SignIn.styles";

const SignInPresenter = () => {
  return (
    <S.Aa>
      <S.Wrapper>
        {/* <S.Wrapper2> */}
        <S.Label>BAKERTOWN</S.Label>
        <S.SignInLabel>로그인</S.SignInLabel>
        <S.EmailLabel>email</S.EmailLabel>
        <S.Email type="text" placeholder="example@naver.com" />
        <S.PasswordLabel>password</S.PasswordLabel>
        <S.Password type="password" placeholder="******" />
        <S.SignUp>회원가입하기</S.SignUp>
        {/* <S.SignUp>회원가입하기</S.SignUp> */}
        <S.SignInButton>로그인</S.SignInButton>
        {/* <S.Wrapper2/> */}
      </S.Wrapper>

      <S.ImageWrapper>
        <S.Img className="Image" alt="login" src="/imgs/login.jpg" />
      </S.ImageWrapper>
    </S.Aa>
  );
};

export default SignInPresenter;
