import * as S from "./SignIn.styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValues } from "./SingIn.types";
import { logout, signInWithGoogle } from "../../../../../pages/_app";
import { signin } from "../../../../../pages/_app";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const SignInPresenter = (props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const emailRef: any = useRef();
  const passwordRef: any = useRef();

  async function handlesSignIn() {
    setLoading(true);
    try {
      await signin(emailRef.current.value, passwordRef.current.value);
      alert("로그인 되셨습니다.");
      router.push("/");
    } catch {
      alert("이미 로그인 이메일입니다.");
    }
    setLoading(false);
  }

  async function handlesSignOut() {
    setLoading(true);
    try {
      await logout();
      alert("로그아웃 되셨습니다.");
    } catch {
      alert("error!!");
    }
    setLoading(false);
  }

  return (
    <S.Aa>
      <S.Wrapper>
        {/* <S.Wrapper2> */}
        <S.Label>BAKERTOWN</S.Label>
        <S.SignInLabel>SingIn</S.SignInLabel>
        <S.EmailLabel>email</S.EmailLabel>
        <S.Email type="text" placeholder="example@naver.com" ref={emailRef} />

        <S.PasswordLabel>password</S.PasswordLabel>
        <S.Password type="password" placeholder="******" ref={passwordRef} />

        <S.SignUp onClick={props.SignUp}>SignUp</S.SignUp>
        {/* <S.SignUp>회원가입하기</S.SignUp> */}
        <S.SignInButton onClick={handlesSignIn}>SingIn</S.SignInButton>
        <S.SignInWithGoogle onClick={handlesSignOut}>
          SingOut
        </S.SignInWithGoogle>
        {/* <S.Wrapper2/> */}
      </S.Wrapper>

      <S.ImageWrapper>
        <S.Img className="Image" alt="login" src="/imgs/login.jpg" />
      </S.ImageWrapper>
    </S.Aa>
  );
};

export default SignInPresenter;
