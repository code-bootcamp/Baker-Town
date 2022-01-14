import { Modal } from "antd";
import SchedulReservation from "../../scheduleReservation/schedulReservation";
import * as S from "./DetailNavigation.styles";
import { IDetailNavigationPresenterProps } from "./DetailNavigation.types";

const DetailNavigationPresenter = (props: IDetailNavigationPresenterProps) => {
  return (
    <>
      <S.Wrapper>
        <S.SmallImage src="/imgs/class/heart.png" onClick={props.heart} />
        <S.SmallImage src="/imgs/class/share.png" />
        <S.ReservationButton onClick={props.onToggleModal}>
          클래스 신청하기
        </S.ReservationButton>
        <S.ReservationModal
          visible={props.isVisible}
          onOk={props.onToggleModal}
          onCancel={props.onToggleModal}
          style={{ height: "500px", width: "1000px" }}
        >
          <SchedulReservation
            myClass={props.myClass}
            selectDate={props.selectDate}
            reservation={props.reservation}
            isVisible={props.isVisible}
          />
        </S.ReservationModal>
      </S.Wrapper>
    </>
  );
};

export default DetailNavigationPresenter;
