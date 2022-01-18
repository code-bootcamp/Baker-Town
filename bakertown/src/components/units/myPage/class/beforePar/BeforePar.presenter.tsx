import * as S from "./BeforePar.styles";
import { v4 as uuidv4 } from "uuid";
import SideNavigationContainer from "../../sideNav/SideNavigation.container";
import { IBeforeParPresenter } from "./BeforePar.types";

const BeforeParPresenter = (props: IBeforeParPresenter) => {
  return (
    <>
      <S.Wrapper>
        <SideNavigationContainer />
        <S.ClassList>
          <S.ListTitle>
            <S.ListTitleText>CLASS | 참여예정</S.ListTitleText>
          </S.ListTitle>
          <S.ListContents>
            {props.userResult.beforePar?.map((el: any, index: number) => (
              <S.ClassWrapper key={uuidv4()}>
                <S.ClassImage
                  onClick={props.classDetail(el)}
                  src={`https://storage.googleapis.com/${el.images?.[0]}`}
                />
                <S.ClassContentsWrapper>
                  <S.ClassPatissier>{el.category}</S.ClassPatissier>
                  <S.ClassName onClick={props.classDetail(el)}>
                    {el.className}
                  </S.ClassName>
                  <S.ClassPeople>
                    수강신청 인원 {el.class.member}명
                  </S.ClassPeople>
                </S.ClassContentsWrapper>
                <S.ClassLine></S.ClassLine>
                <S.ClassInfoWrapper>
                  <S.ClassDate>
                    {el.class.date} {el.class.start}
                  </S.ClassDate>
                  <S.ClassCancelButton onClick={props.cancel(el, index)}>
                    취소하기
                  </S.ClassCancelButton>
                </S.ClassInfoWrapper>
              </S.ClassWrapper>
            ))}
          </S.ListContents>
        </S.ClassList>
      </S.Wrapper>
    </>
  );
};

export default BeforeParPresenter;
