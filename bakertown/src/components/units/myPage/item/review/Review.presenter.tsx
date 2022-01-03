import * as S from "./Review.styles";
import { v4 as uuidv4 } from "uuid";

const ReviewPresenter = () => {
  const myClass = ["참여 예정", "참여 완료", "나의 후기", "찜 목록"];
  const myItem = ["주문 내역", "장바구니", "내역"];
  return (
    <>
      <S.Wrapper>
        <S.Sidebar>
          <S.Title>
            베이키키
            <img className="Image" alt="mypage" src="/imgs/mypage.png" />
          </S.Title>
          <S.SmallLine></S.SmallLine>
          <S.MyPointTitle>MY POINT</S.MyPointTitle>
          <S.MyPoint>2018P</S.MyPoint>
          <S.SideTitle>CLASS</S.SideTitle>
          {myClass.map((el) => (
            <S.SiderbarMyClass key={uuidv4()}>
              <S.SideButton>{el}</S.SideButton>
              <S.SmallLine></S.SmallLine>
            </S.SiderbarMyClass>
          ))}
          <S.SideTitle>ITEM</S.SideTitle>
          {myItem.map((el) => (
            <S.SiderbarMyItem key={uuidv4()}>
              <S.SideButton>{el}</S.SideButton>
              <S.SmallLine></S.SmallLine>
            </S.SiderbarMyItem>
          ))}
        </S.Sidebar>
        <S.ClassList>
          <S.ListTitle>
            <S.ListTitleText>ITEM | 나의 리뷰</S.ListTitleText>
          </S.ListTitle>
          <S.ListContents>
            {new Array(4).fill(1).map((el) => (
              <S.ClassWrapper>
                <S.ClassImage />
                <S.ClassPatissier>원데이</S.ClassPatissier>
                <S.ClassName>마카롱클래스</S.ClassName>
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

export default ReviewPresenter;
