import { ClassSubject } from "../../landing/LandingSubject";
import * as S from "./ClassList.styles";

const ClassListPresenter = () => {
  return (
    <>
      <S.Wrapper>
        <S.Sidebar>
          <S.SideTitle>전체 클래스</S.SideTitle>
          <S.SideButton>베이킹</S.SideButton>
          <S.SmallLine></S.SmallLine>
          <S.SideButton>마카롱</S.SideButton>
          <S.SmallLine></S.SmallLine>
          <S.SideButton>케이크</S.SideButton>
          <S.SmallLine></S.SmallLine>
          <S.SideButton>쿠키</S.SideButton>
          <S.SmallLine></S.SmallLine>
          <S.SideButton>커피</S.SideButton>
          <S.SmallLine></S.SmallLine>
          <S.SideButton>쇼콜라</S.SideButton>
          <S.SmallLine></S.SmallLine>
        </S.Sidebar>
        <S.ClassList>
          <S.ListTitle>
            <S.ListTitleText>전체 클래스</S.ListTitleText>
            <S.ListSelect></S.ListSelect>
          </S.ListTitle>
          <S.ListContents>
            {new Array(24).fill(1).map((el) => (
              <S.ClassWrapper>
                <S.ClassImage />
                <S.ClassPatissier>{el.patissier}</S.ClassPatissier>
                <S.ClassName>{el.className}</S.ClassName>
                <S.ClassLine></S.ClassLine>
                <S.ClassPrice>{el.price} 원</S.ClassPrice>
              </S.ClassWrapper>
            ))}
          </S.ListContents>
        </S.ClassList>
      </S.Wrapper>
    </>
  );
};

export default ClassListPresenter;
