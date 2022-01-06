import * as S from "./AfterPar.styles";
import { v4 as uuidv4 } from "uuid";
import SideNavigationContainer from "../../sideNav/SideNavigation.container";
import { Modal, Button } from "antd";
import WriteReviewContainer from "../../../../commons/writeReview/WriteReview.container";

const AfterParPresenter = (props) => {
  const myClass = ["참여 예정", "참여 완료", "나의 후기", "찜 목록"];
  const myItem = ["주문 내역", "장바구니", "리뷰"];
  return (
    <>
      <S.Wrapper>
        <SideNavigationContainer />
        <S.ClassList>
          <S.ListTitle>
            <S.ListTitleText>CLASS | 참여완료</S.ListTitleText>
          </S.ListTitle>
          <S.ListContents>
            {new Array(4).fill(1).map((el) => (
              <S.ClassWrapper>
                <S.Class>
                  <S.ClassImage />
                  <S.ClassPatissier>원데이</S.ClassPatissier>
                  <S.ClassName>마카롱클래스</S.ClassName>
                  <S.ClassPeople>수강신청 인원 2명</S.ClassPeople>
                  <S.ClassLine></S.ClassLine>
                </S.Class>
                <S.ClassSubWrapper>
                  <S.ClassDate>12월 18일(토요일) 오후7시</S.ClassDate>
                  <S.WriteReview onClick={props.onToggleModal}>리뷰 작성하기</S.WriteReview>
                  {props.isOpen && (
                    <Modal
                      title="리뷰 등록"
                      visible={props.isOpen}
                      onOk={props.onToggleModal}
                      onCancel={props.onToggleModal}
                    >
                      <WriteReviewContainer />
                    </Modal>
                  )}
                </S.ClassSubWrapper>
              </S.ClassWrapper>
            ))}
          </S.ListContents>
        </S.ClassList>
      </S.Wrapper>
    </>
  );
};

export default AfterParPresenter;
