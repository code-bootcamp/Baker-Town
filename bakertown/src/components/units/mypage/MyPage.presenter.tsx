import * as S from "./MyPage.styles";

const MyPagePresenter = () => {
  return (
    <>
      <S.Wrapper>
        <S.Sidebar>
          <S.SideTitle>베이키키</S.SideTitle>
          <S.SideTitle>MY POINT</S.SideTitle>
          <S.SideTitle>2018P</S.SideTitle>
          <S.SmallLine></S.SmallLine>
          <S.SideButton>참여 예정</S.SideButton>
          <S.SmallLine></S.SmallLine>
          <S.SideButton>참여 완료</S.SideButton>
          <S.SmallLine></S.SmallLine>
          <S.SideButton>나의 후기</S.SideButton>
          <S.SmallLine></S.SmallLine>
          <S.SideButton>찜 목록</S.SideButton>
          <S.SmallLine></S.SmallLine>
          <S.SideTitle>ITEM</S.SideTitle>
          <S.SmallLine></S.SmallLine>
          <S.SideButton>주문 내역</S.SideButton>
          <S.SmallLine></S.SmallLine>
          <S.SideButton>장바 구니</S.SideButton>
          <S.SmallLine></S.SmallLine>
          <S.SideButton>리뷰</S.SideButton>
          <S.SmallLine></S.SmallLine>
        </S.Sidebar>
        <S.ClassList>
          <S.ListTitle>
            <S.ListTitleText>CLASS | 참여예정</S.ListTitleText>
          </S.ListTitle>
          <S.ListContents>
            <S.ClassWrapper>
              <S.ClassImage />
              <S.ClassPatissier></S.ClassPatissier>
              <S.ClassName></S.ClassName>
              <S.ClassLine></S.ClassLine>
              <S.ClassPrice></S.ClassPrice>
            </S.ClassWrapper>
          </S.ListContents>
        </S.ClassList>
      </S.Wrapper>
    </>
  );
};

export default MyPagePresenter;
