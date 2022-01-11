import SignUpPresenter from "./SignUp.presenter";
import { useRouter } from "next/router";

const SignUpContainer = () => {
  const router = useRouter();
  const onClickSignIn = () => {
    router.push(`/signIn`);
  };

  return <SignUpPresenter onClickSignIn={onClickSignIn} />;
};

export default SignUpContainer;
