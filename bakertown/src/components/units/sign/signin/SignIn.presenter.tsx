import * as S from "./SignIn.styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  myEmail: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("반드시 입력해야하는 필수 사항입니다."),

  myPassword: yup
    .string()
    .min(4, "비밀번호는 최소4자리 이상입니다.")
    .max(15, "비밀번호는 최대 15자리까지입니다.")
    .required("비밀번호는 반드시 입력해주세요."),
});

interface FormValues {
  myEmail: string;
  myPassword: string;
}

const SignInPresenter = () => {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onClickLogin(data: FormValues) {
    //loginUser API 요청하기!!!
    console.log(data);
  }

  return (
    <S.Aa>
      <S.Wrapper onSubmit={handleSubmit(onClickLogin)}>
        {/* <S.Wrapper2> */}
        <S.Label>BAKERTOWN</S.Label>
        <S.SignInLabel>로그인</S.SignInLabel>
        <S.EmailLabel>email</S.EmailLabel>
        <S.Email
          type="text"
          placeholder="example@naver.com"
          {...register("myEmail")}
        />
        <S.EmailError>{formState.errors.myEmail?.message}</S.EmailError>
        <S.PasswordLabel>password</S.PasswordLabel>
        <S.Password
          type="password"
          placeholder="******"
          {...register("myPassword")}
        />
        <S.PasswordError>
          {formState.errors.myPassword?.message}
        </S.PasswordError>
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
