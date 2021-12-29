import * as S from "./SignUp.styles";

const SignUpPresenter = () => {
  return (
    <S.Aa>
      <S.Wrapper>
        <S.Label>회원가입</S.Label>
        <S.NameLabel>이름</S.NameLabel>
        <S.Name type="text" placeholder="홍길동" />
        <S.EmailLabel>이메일</S.EmailLabel>
        <S.Email type="text" placeholder="example@naver.com" />
        <S.PasswordLabel>비밀번호</S.PasswordLabel>
        <S.Password type="password" placeholder="******" />
        <S.PasswordLabel>비밀번호 확인</S.PasswordLabel>
        <S.Password type="password" placeholder="******" />

        {/* <S.SignUp>회원가입하기</S.SignUp> */}
        <S.SignUpButton>회원가입하기</S.SignUpButton>
      </S.Wrapper>
    </S.Aa>
  );
};

export default SignUpPresenter;
