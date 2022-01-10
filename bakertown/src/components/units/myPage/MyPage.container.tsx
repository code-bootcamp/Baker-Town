import MyPagePresenter from "./MyPage.presenter";
import { deleteUser, updatePassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../../../../pages/_app";

const MyPageContainer = () => {
  const router = useRouter();
  const currnetUser: any = useAuth();

  //회원 탈퇴기능
  async function deleteAccount() {
    try {
      await deleteUser(currnetUser);
      confirm("회원탈퇴가 완료되었습니다.");
      router.push("/");
    } catch {
      alert("회원탈퇴 실패");
    }
  }

  return <MyPagePresenter deleteAccount={deleteAccount} />;
};

export default MyPageContainer;
