import { useEffect, useState } from "react";
import * as S from "./MyPage.styles";
import { IMyPageProps } from "./MyPage.types";
import { deleteUser, updatePassword } from "firebase/auth";
import { firebaseApp, useAuth } from "../../../../pages/_app";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const MyPagePresenter = (props: IMyPageProps) => {
  const [password, setPassword] = useState("");
  const currentUser: any = useAuth();

  const [myUser, setMyUser] = useState({
    name: "",
  });
  useEffect(async () => {
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
  });
  // 패스워드 변경
  const passwordChange = async () => {
    function getASecureRandomPassword() {
      return password;
    }
    const newPassword = getASecureRandomPassword();

    try {
      await updatePassword(currentUser, newPassword);
      confirm("비밀번호변경이 완료되었습니다.");
    } catch {
      alert("비밀번호 변경 실패");
    }
  };

  return (
    <S.Wrapper>
      <S.ModifyWrapper>
        <S.LeftWrapper>
          <S.ProfileUpload src="/imgs/logo.png" />
          <S.UserName>{myUser?.name}님</S.UserName>
          <S.UserName>{currentUser?.email}</S.UserName>
          {/* <S.ImageModifyButton>프로필사진 변경하기</S.ImageModifyButton> */}
          <S.ImageModifyButton onClick={props.deleteAccount}>
            회원탈퇴
          </S.ImageModifyButton>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.Header>
            <S.NameWrapper>
              <S.Title>닉네임 변경</S.Title>
              <S.InputWrapper>
                <S.Label>변경할 닉네임</S.Label>
                <S.Input type="text" />
              </S.InputWrapper>
              <S.ButtonWrapper>
                <S.ModifyNameButton>닉네임 변경하기</S.ModifyNameButton>
              </S.ButtonWrapper>
            </S.NameWrapper>
          </S.Header>
          <S.Header>
            <S.Title>비밀번호 변경</S.Title>
            {/* <S.InputWrapper>
              <S.Label>현재 비밀번호</S.Label>
              <S.Input type="password" />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>새 비밀번호</S.Label>
              <S.Input type="password" />
            </S.InputWrapper> */}
            <S.InputWrapper>
              <S.Label>새 비밀번호 입력</S.Label>
              <S.Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </S.InputWrapper>
            <S.ButtonWrapper>
              <S.ModifyButton onClick={passwordChange}>
                비밀번호 변경하기
              </S.ModifyButton>
            </S.ButtonWrapper>
          </S.Header>
        </S.RightWrapper>
      </S.ModifyWrapper>
    </S.Wrapper>
  );
};

export default MyPagePresenter;
