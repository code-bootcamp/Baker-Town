import * as S from "./DashBoardMyPage.styles";
import { IDashBoardMyPageProps } from "./DashBoardMyPage.types";

const DashBoardMyPagePresenter = (props: IDashBoardMyPageProps) => {
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
            </S.ButtonWrapper>
          </S.Header>
        </S.RightWrapper>
      </S.ModifyWrapper>
    </S.Wrapper>
  );
};

export default DashBoardMyPagePresenter;
