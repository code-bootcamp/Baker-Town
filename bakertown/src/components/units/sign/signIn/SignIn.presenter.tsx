import * as S from "./SignIn.styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValues } from "./SingIn.types";
import { logout, signInWithGoogle } from "../../../../../pages/_app";
import { signin } from "../../../../../pages/_app";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { ButtonBase, Paper } from "@material-ui/core";
import { Button } from "@mui/material";

const SignInPresenter = (props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const emailRef: any = useRef();
  const passwordRef: any = useRef();

  async function handlesSignIn(props) {
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
    // <Paper>
    <S.Ba>
      <S.Aa>
        <S.Wrapper>
          <S.Label>BAKER TOWN</S.Label>
          {/* <div>{currentUser?.email}</div> */}
          <S.Label>로그인</S.Label>

          <S.EmailLabel>email</S.EmailLabel>
          <S.Email ref={emailRef} placeholder="email" />
          <S.PasswordLabel>password</S.PasswordLabel>
          <S.Password
            ref={passwordRef}
            type="Password"
            placeholder="password"
          />

          <S.SignUpButton
            // disabled={loading || currentUser}
            onClick={handlesSignIn}
          >
            SignIn
          </S.SignUpButton>
          {/* <S.SignUpButton
            // disabled={loading || currentUser}
            onClick={handlesSignIn}
          >
            SignIn
          </S.SignUpButton> */}
          <S.SignUpButton
            // disabled={loading || currentUser}
            onClick={props.onClickSignUp}
          >
            SignUp
          </S.SignUpButton>
        </S.Wrapper>
      </S.Aa>
    </S.Ba>

    // </Paper>
  );
};

export default SignInPresenter;
