import SchedulReservation from "../../scheduleReservation/schedulReservation";
import * as S from "./DetailNavigation.styles";
import { IDetailNavigationPresenterProps } from "./DetailNavigation.types";

const DetailNavigationPresenter = (props: IDetailNavigationPresenterProps) => {
  return (
    <>
      <S.Wrapper>
        <S.SmallImage src="/imgs/class/heart.png" onClick={props.heart} />
        <S.SmallImage src="/imgs/class/share.png" onClick={props.share} />
        <S.ReservationButton onClick={props.onToggleModal}>
          클래스 신청하기
        </S.ReservationButton>
        {/* <S.ReservationModal
          visible={props.isVisible}
          onOk={props.onToggleModal}
          onCancel={props.onToggleModal}
          style={{ height: "500px", width: "1000px" }}
        > */}
        {props.isVisible && (
          <SchedulReservation
            myClass={props.myClass}
            selectDate={props.selectDate}
            onToggleModal={props.onToggleModal}
            reservation={props.reservation}
            isVisible={props.isVisible}
          />
        )}
        {props.isOpen && (
          <S.RightWrapper>
            <S.SidebarWrapper>
              <S.Purchase>
                <S.SideCategory>{props.myStore?.category}</S.SideCategory>
                <S.SideItemName>{props.myStore?.itemName}</S.SideItemName>
                <S.PriceToBuy>
                  <S.SideItemPrice>
                    {Number(props.myStore?.price).toLocaleString("ko-KR")}원
                  </S.SideItemPrice>
                  <S.ToBuyButton onClick={props.onToggleModal}>
                    취소하기
                  </S.ToBuyButton>
                  <S.ToBuyButton onClick={props.purchase}>
                    구매하기
                  </S.ToBuyButton>
                </S.PriceToBuy>
              </S.Purchase>
            </S.SidebarWrapper>
          </S.RightWrapper>
        )}

        {/* </S.ReservationModal> */}
      </S.Wrapper>
    </>
  );
};

export default DetailNavigationPresenter;
