import DashBoardMyPagePresenter from "./DashBoardMyPage.presenter";
import { deleteUser, updatePassword } from "firebase/auth";
import { useRouter } from "next/router";
import { firebaseApp, useAuth } from "../../../../../pages/_app";
import { useState } from "react";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { message } from "antd";

const DashBoardMyPageContainer = () => {
  const [myIntroduce, setIntroduce] = useState("");
  const router = useRouter();
  const currnetUser: any = useAuth();

  //파티셰 한 줄 소개  작성
  const onClickIntroduce = async () => {
    // 내 정보 불러오기
    const userQuery = doc(
      getFirestore(firebaseApp),
      "users",
      currnetUser?.email
    );
    await updateDoc(userQuery, {
      introduce: myIntroduce,
    });
    message.success("등록완료", 1.5);
  };

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

  return (
    <DashBoardMyPagePresenter
      deleteAccount={deleteAccount}
      onClickIntroduce={onClickIntroduce}
      setIntroduce={setIntroduce}
    />
  );
};

export default DashBoardMyPageContainer;
