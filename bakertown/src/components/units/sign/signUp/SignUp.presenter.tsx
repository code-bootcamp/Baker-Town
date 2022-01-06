import * as S from "./SignUp.styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValues } from "./SingUp.types";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { firebaseApp, signup } from "../../../../../pages/_app";
import { useRouter } from "next/router";
import { Modal } from "antd";
import {
  addDoc,
  collection,
  getFirestore,
  setDoc,
  doc,
} from "@firebase/firestore";
// const schema = yup.object().shape({
//   myName: yup.string().required("반드시 입력해야하는 필수 사항입니다."),

//   myEmail: yup
//     .string()
//     .email("이메일 형식이 적합하지 않습니다.")
//     .required("반드시 입력해야하는 필수 사항입니다."),

//   myPassword: yup
//     .string()
//     .min(4, "비밀번호는 최소4자리 이상입니다.")
//     .max(15, "비밀번호는 최대 15자리까지입니다.")
//     .required("비밀번호는 반드시 입력해주세요."),

//   myPassword2: yup
//     .string()
//     .oneOf([yup.ref("myPassword"), null], "비밀번호가 일치하지 않습니다."),
// });
const SignUpPresenter = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const nameRef: any = useRef();
  const phoneRef: any = useRef();
  const emailRef: any = useRef();
  const passwordRef: any = useRef();

  async function handlesSignUp() {
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
        mypoint: 0,
        heart: [],
        beforePar: [],
        review: [],
      });
      await signup(emailRef.current.value, passwordRef.current.value);
      alert("회원가입되셨습니다.");
      router.push("/signIn");
    } catch {
      alert("회원가입을 완료해주세요");
    }
    setLoading(false);
  }
  // const SignUpPresenter = () => {
  //   const { handleSubmit, register, formState } = useForm({
  //     mode: "onChange",
  //     resolver: yupResolver(schema),
  //   });

  //   function onClickSignUp(data: FormValues) {
  //     //loginUser API 요청하기!!!
  //     console.log(data);
  //   }
  return (
    // <S.Aa>
    //   <S.Wrapper onSubmit={handleSubmit(onClickSignUp)}>
    //     <S.Label>SignUp</S.Label>
    //     <S.NameLabel>name</S.NameLabel>
    //     <S.Name type="text" placeholder="홍길동" {...register("myName")} />
    //     <S.Error>{formState.errors.myName?.message}</S.Error>
    //     <S.EmailLabel>email</S.EmailLabel>
    //     <S.Email
    //       type="text"
    //       placeholder="example@naver.com"
    //       {...register("myEmail")}
    //     />
    //     <S.Error>{formState.errors.myEmail?.message}</S.Error>
    //     <S.PasswordLabel>password</S.PasswordLabel>
    //     <S.Password
    //       type="password"
    //       placeholder="******"
    //       {...register("myPassword")}
    //     />
    //     <S.Error>{formState.errors.myPassword?.message}</S.Error>
    //     <S.PasswordLabel>passwordcheck</S.PasswordLabel>
    //     <S.Password
    //       type="password"
    //       placeholder="******"
    //       {...register("myPassword2")}
    //     />
    //     <S.Error>{formState.errors.myPassword2?.message}</S.Error>
    //     {/* <S.SignUp>회원가입하기</S.SignUp> */}
    //     <S.SignUpButton>SignUp</S.SignUpButton>
    //   </S.Wrapper>
    // </S.Aa>
    <S.Aa>
      <S.Wrapper>
        {/* <div>{currentUser?.email}</div> */}
        <S.Label>회원가입</S.Label>
        <S.EmailLabel>name</S.EmailLabel>
        <S.Email ref={nameRef} placeholder="name" />
        <S.EmailLabel>email</S.EmailLabel>
        <S.Email ref={emailRef} placeholder="email" />
        <S.PasswordLabel>password</S.PasswordLabel>
        <S.Password ref={passwordRef} type="Password" placeholder="password" />
        <S.PasswordLabel>phone</S.PasswordLabel>
        <S.Password ref={phoneRef} placeholder="phone" />
        <S.SignUpButton
          // disabled={loading || currentUser}
          onClick={handlesSignUp}
        >
          SignUp
        </S.SignUpButton>
      </S.Wrapper>
    </S.Aa>
  );
};

export default SignUpPresenter;
