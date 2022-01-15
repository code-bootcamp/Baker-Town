import MyPagePresenter from "./MyPage.presenter";
import { deleteUser, updatePassword } from "firebase/auth";
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useState } from "react";
import { firebaseApp, useAuth } from "../../../../pages/_app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { message } from "antd";

const MyPageContainer = () => {
  const router = useRouter();
  const currentUser: any = useAuth();
  const [password, setPassword] = useState("");
  const [myUser, setMyUser] = useState<SetStateAction<any>>({
    name: "",
  });

  //회원 탈퇴기능
  async function deleteAccount() {
    try {
      await deleteUser(currentUser);
      message.success("회원탈퇴가 완료되었습니다.", 2);
      router.push("/");
    } catch {
      message.error("회원탈퇴 실패", 1.5);
    }
  }

  const myPageContents = async () => {
    if (myUser?.name === "") {
      if (!currentUser) return;
      const userQuery = doc(
        getFirestore(firebaseApp),
        "users",
        currentUser?.email
      );
      const userResult = await getDoc(userQuery);
      setMyUser(userResult.data());
    }
  };

  useEffect(() => {
    myPageContents();
  });

  // 패스워드 변경
  const onClickPasswordChange = async () => {
    function getASecureRandomPassword() {
      return password;
    }
    const newPassword = getASecureRandomPassword();
    try {
      await updatePassword(currentUser, newPassword);
      message.success("비밀번호 변경 완료", 1.5);
    } catch {
      message.error("비밀번호 변경 실패", 1.5);
    }
  };

  return (
    <MyPagePresenter
      deleteAccount={deleteAccount}
      setPassword={setPassword}
      passwordChange={onClickPasswordChange}
      currentUser={currentUser}
      myUser={myUser}
    />
  );
};

export default MyPageContainer;
