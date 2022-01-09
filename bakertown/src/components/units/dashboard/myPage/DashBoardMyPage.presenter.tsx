import { useAuth } from "../../../../../pages/_app";
import * as S from "./DashBoardMyPage.styles";
import { IDashBoardMyPageProps } from "./DashBoardMyPage.types";
import { deleteUser } from "firebase/auth";
import { useRouter } from "next/router";

const DashBoardMyPagePresenter = (props: IDashBoardMyPageProps) => {
  const router = useRouter();
  const currnetUser: any = useAuth();

  function deleteu() {
    deleteUser(currnetUser)
      .then(() => {
        confirm("회원탈퇴가 완료되었습니다.");
        router.push("/");
      })
      .catch((error) => {
        alert("회원탈퇴");
      });
  }

  return (
    <S.Wrapper>
      <S.ModifyWrapper>
        <S.LeftWrapper>
          <S.ProfileUpload src="/imgs/logo.png" />
          <S.UserName>김땡땡님</S.UserName>
          <S.UserName>bakertown@baker.com</S.UserName>
          <S.ImageModifyButton>프로필사진 변경하기</S.ImageModifyButton>
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
            <S.InputWrapper>
              <S.Label>현재 비밀번호</S.Label>
              <S.Input type="password" />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>새 비밀번호</S.Label>
              <S.Input type="password" />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>새 비밀번호 확인</S.Label>
              <S.Input type="password" />
            </S.InputWrapper>
            <S.ButtonWrapper>
              <S.ModifyButton>비밀번호 변경하기</S.ModifyButton>
              <S.ModifyButton onClick={deleteu}>회원탈퇴 </S.ModifyButton>
            </S.ButtonWrapper>
          </S.Header>
        </S.RightWrapper>
      </S.ModifyWrapper>
    </S.Wrapper>
  );
};

export default DashBoardMyPagePresenter;
