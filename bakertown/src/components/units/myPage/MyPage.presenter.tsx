import { useEffect, useState } from "react";
import * as S from "./MyPage.styles";
import { IMyPageProps } from "./MyPage.types";

const MyPagePresenter = (props: IMyPageProps) => {
  return (
    <S.Wrapper>
      <S.ModifyWrapper>
        <S.LeftWrapper>
          <S.ProfileUpload src="/imgs/logo.png" />
          <S.UserName>{props.myUser?.name}님</S.UserName>
          <S.UserName>{props.currentUser?.email}</S.UserName>
          {/* <S.ImageModifyButton>프로필사진 변경하기</S.ImageModifyButton> */}
          <S.ImageModifyButton onClick={props.deleteAccount}>
            회원탈퇴
          </S.ImageModifyButton>
        </S.LeftWrapper>
        <S.RightWrapper>
          {/* <S.Header>
            <S.NameWrapper>
              <S.Title>{props.myUser?.name}님</S.Title>
              <S.InputWrapper>
                <S.Label>{props.currentUser?.email}</S.Label>
                <S.Input type="text" />
              </S.InputWrapper>
              <S.ButtonWrapper>
                <S.ModifyNameButton>닉네임 변경하기</S.ModifyNameButton>
              </S.ButtonWrapper>
            </S.NameWrapper>
          </S.Header> */}
          <S.Header>
            <S.Name>{props.myUser?.name}님</S.Name>
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
              {/* <S.Label>새 비밀번호 입력</S.Label> */}
              <S.Input
                type="password"
                onChange={(e) => props.setPassword(e.target.value)}
              />
            </S.InputWrapper>
            <S.ButtonWrapper>
              <S.ModifyButton onClick={props.passwordChange}>
                비밀번호 변경하기
              </S.ModifyButton>
            </S.ButtonWrapper>
            <S.ButtonWrapper>
              <S.DeleteAccount onClick={props.deleteAccount}>
                회원탈퇴
              </S.DeleteAccount>
            </S.ButtonWrapper>
          </S.Header>
        </S.RightWrapper>
      </S.ModifyWrapper>
    </S.Wrapper>
  );
};

export default MyPagePresenter;
