import * as S from "./BeforePar.styles";
import { v4 as uuidv4 } from "uuid";
import SideNavigationContainer from "../../sideNav/SideNavigation.container";

const BeforeParPresenter = (props) => {
  const myClass = ["참여 예정", "참여 완료", "나의 후기", "찜 목록"];
  const myItem = ["주문 내역", "장바구니", "리뷰"];
  return (
    <>
      <S.Wrapper>
        <SideNavigationContainer />
        <S.ClassList>
          <S.ListTitle>
            <S.ListTitleText>CLASS | 참여예정</S.ListTitleText>
          </S.ListTitle>
          <S.ListContents>
            {props.userResult.beforePar?.map((el) => (
              <S.ClassWrapper>
                <S.ClassImage />
                <S.ClassPatissier>원데이</S.ClassPatissier>
                <S.ClassName>{el.classRouter}</S.ClassName>
                <S.ClassPeople>수강신청 인원 2명</S.ClassPeople>
                <S.ClassLine></S.ClassLine>
                <S.ClassDate>12월 18일(토요일) 오후7시</S.ClassDate>
              </S.ClassWrapper>
            ))}
          </S.ListContents>
        </S.ClassList>
      </S.Wrapper>
    </>
  );
};

export default BeforeParPresenter;
