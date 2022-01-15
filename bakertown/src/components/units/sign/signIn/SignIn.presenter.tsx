import * as S from "./SignIn.styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { logout, signInWithGoogle } from "../../../../../pages/_app";
import { signin } from "../../../../../pages/_app";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { ButtonBase, Paper } from "@material-ui/core";
import { Button } from "@mui/material";
import { ISignInPresenterProps } from "./SingIn.types";
import { message } from "antd";

const SignInPresenter = (props: ISignInPresenterProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const emailRef: any = useRef();
  const passwordRef: any = useRef();

  const handlesSignIn = async () => {
    setLoading(true);
    try {
      await signin(emailRef.current.value, passwordRef.current.value);
      message.success("로그인 완료", 1.5);
      router.push("/");
    } catch {
      message.error("로그인 실패", 2);
    }
    setLoading(false);
  };

  return (
    <S.Wrapper>
      <S.LoginWrapper>
        {/* <div>{currentUser?.email}</div> */}
        <S.LoginInnerWrapper>
          <S.BrandWrapper>
            <S.LogoLabel src="/imgs/logo.png" />
            <S.SignUpWrapper onClick={props.onClickSignUp}>
              <S.SignUpLabel>회원 가입하기</S.SignUpLabel>
              <S.Rightarrow src="/imgs/rightarrow.png" />
            </S.SignUpWrapper>
          </S.BrandWrapper>
          <S.LoginLabel>로그인</S.LoginLabel>
          <S.EmailLabel>이메일</S.EmailLabel>
          <S.Email ref={emailRef} placeholder="example@naver.com" />
          <S.PasswordLabel>비밀번호</S.PasswordLabel>
          <S.Password ref={passwordRef} type="Password" placeholder="••••••" />
          <S.SignInWrapper>
            <S.SignInButton
              // disabled={loading || currentUser}
              onClick={handlesSignIn}
            >
              로그인
            </S.SignInButton>
            {/* <S.SignUpButton
            // disabled={loading || currentUser}
            onClick={handlesSignIn}
          >
            SignIn
          </S.SignUpButton>  */}
            {/* <S.SignUpButton
              // disabled={loading || currentUser}
              onClick={props.onClickSignUp}
            >
              회원가입
            </S.SignUpButton> */}
          </S.SignInWrapper>
        </S.LoginInnerWrapper>
      </S.LoginWrapper>
      <S.PhotoWrapper />
    </S.Wrapper>
  );
};

export default SignInPresenter;
