import * as S from "./SignUp.styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValues, ISignUpPresenterProps } from "./SingUp.types";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { firebaseApp, signup } from "../../../../../pages/_app";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { message } from "antd";

import {
  addDoc,
  collection,
  getFirestore,
  setDoc,
  doc,
} from "@firebase/firestore";

const SignUpPresenter = (props: ISignUpPresenterProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(0);
  const nameRef: any = useRef();
  const phoneRef: any = useRef();
  const emailRef: any = useRef();
  const passwordRef: any = useRef();

  //비밀번호 검사
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const onChangePasswordChk = (event: any) => {
    //비밀번호를 입력할때마다 password 를 검증하는 함수
    setPasswordError(event.target.value !== password);
    setPasswordCheck(event.target.value);
  };
  const handlesSignUp = async () => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    setLoading(true);
    try {
      const userQuery = doc(
        getFirestore(firebaseApp),
        "users",
        emailRef.current.value
      );
      await setDoc(userQuery, {
        email: emailRef.current.value,
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        check: check,
        mypoint: 0,
        heart: [],
        beforePar: [],
        review: [],
        introduce: "",
        boughtItem: [],
        itemHeart: [],
        itemReview: [],
        afterPar: [],
      });
      await signup(emailRef.current.value, passwordRef.current.value);
      message.success("회원가입 완료", 2.5);
      router.push("/signIn");
    } catch {
      message.error("회원가입 실패", 2);
    }
    setLoading(false);
  };

  const checkPatissier = (event: any) => {
    if (event.target.checked) setCheck(1);
    if (!event.target.checked) setCheck(0);
  };

  return (
    <S.Wrapper>
      <S.SignUpWrapper>
        <S.SignUpInnerWrapper>
          <S.BrandWrapper>
            <S.LogoLabel src="/imgs/logo.png" />
            <S.SignInWrapper onClick={props.onClickSignIn}>
              <S.SignInLabel>로그인 하기 </S.SignInLabel>
              <S.Rightarrow src="/imgs/rightarrow.png" />
            </S.SignInWrapper>
          </S.BrandWrapper>
          <S.SignUpLabel>회원가입</S.SignUpLabel>
          <S.NameLabel>name</S.NameLabel>
          <S.Name ref={nameRef} placeholder="이름을 입력해주세요" />
          <S.EmailLabel>email</S.EmailLabel>
          <S.Email ref={emailRef} placeholder="email@email.com" />
          <S.PasswordLabel>password</S.PasswordLabel>
          <S.Password
            ref={passwordRef}
            type="Password"
            placeholder="6자리이상 입력해주세요"
            required
            onChange={onChangePassword}
          />
          <S.PasswordLabel>password check</S.PasswordLabel>
          <S.Password
            ref={passwordRef}
            type="Password"
            placeholder="비밀번호를 다시 입력해주세요"
            required
            onChange={onChangePasswordChk}
          />
          {passwordError && (
            <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
          )}
          <S.PhoneLabel>phone</S.PhoneLabel>
          <S.Phone ref={phoneRef} placeholder="010-0000-0000" />
          <S.Check type="checkbox" value="테스트" onChange={checkPatissier} />
          파티셰로 가입하기
          <S.SignUpButton
            // disabled={loading || currentUser}
            onClick={handlesSignUp}
          >
            SignUp
          </S.SignUpButton>
        </S.SignUpInnerWrapper>
      </S.SignUpWrapper>
      <S.PhotoWrapper />
    </S.Wrapper>
  );
};

export default SignUpPresenter;
