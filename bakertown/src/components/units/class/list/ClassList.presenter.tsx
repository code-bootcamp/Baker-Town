import { ClassSubject } from "../../landing/LandingSubject";
import * as S from "./ClassList.styles";
import { v4 as uuidv4 } from "uuid";
import { IClassListPresenterProps } from "./ClassList.types";

const ClassListPresenter = (props: IClassListPresenterProps) => {
  const sideList = ["베이킹", "마카롱", "케이크", "쿠키", "커피", "쇼콜라"];
  return (
    <>
      <S.Wrapper>
        <S.Sidebar>
          <S.SideTitle onClick={props.classList}>전체 클래스</S.SideTitle>
          {sideList.map((el) => (
            <div key={uuidv4()}>
              <S.SideButton onClick={props.sideButton(el)}>{el}</S.SideButton>
              <S.SmallLine></S.SmallLine>
            </div>
          ))}
        </S.Sidebar>
        <S.ClassList>
          <S.ListTitle>
            <S.ListTitleText>{props.categoryName} 클래스</S.ListTitleText>
            <S.ListSelect>
              <S.ListOption>추천순</S.ListOption>
              <S.ListOption>인기순</S.ListOption>
              <S.ListOption>최신순</S.ListOption>
            </S.ListSelect>
          </S.ListTitle>
          <S.ListContents>
            {props.recent.map((el) => (
              <S.ClassWrapper key={uuidv4()}>
                <S.ClassImage
                // src={`https://storage.googleapis.com/${el.images?.[0]}`}
                />
                <S.ClassPatissier>{el.patissier}</S.ClassPatissier>
                <S.ClassName>{el.className}</S.ClassName>
                <S.ClassLine></S.ClassLine>
                <S.ClassPrice>{el.price} 원</S.ClassPrice>
              </S.ClassWrapper>
            ))}
          </S.ListContents>
          <div>
            <button onClick={props.click1}>1</button>
            <button onClick={props.click2}>2</button>
          </div>
        </S.ClassList>
      </S.Wrapper>
    </>
  );
};

export default ClassListPresenter;
