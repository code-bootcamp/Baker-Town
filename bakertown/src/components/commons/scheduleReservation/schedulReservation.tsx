import * as S from "../../units/class/detail/ClassDetail.styles";
import { v4 as uuidv4 } from "uuid";
import { IScheduleReservationProps } from "../layout/detailNavigation/DetailNavigation.types";

const SchedulReservation = (props: IScheduleReservationProps) => {
  return (
    <S.ScheduleModal>
      <S.ScheduleWrapper isVisible={props.isVisible}>
        <S.ClassSchedule>
          <S.SmallTitle>예약 정보</S.SmallTitle>
          <S.SmallSmallTitle>예약 가능한 일정을 선택해주세요</S.SmallSmallTitle>
          {/* <div>{Object.keys(props.myClass?.applyClass[0])[1]}</div>
                <div>{Object.keys(props.myClass?.applyClass[0])[0]}</div> */}
          <S.ClassScheduleWrapper>
            {props.myClass?.applyClass?.classArray?.map(
              (el: any, index: number) => (
                <S.ClassArrayWrapper
                  key={uuidv4()}
                  onClick={props.selectDate(el, index)}
                >
                  {/* <div>날짜: {el.class.date}</div>
                    <div>시작시간: {el.class.start}</div>
                    <div>최대인원: {el.class.member}</div> */}
                  <S.ClassButton>
                    {/* <S.SmallText>모집 타임</S.SmallText> */}
                    <S.ClassDateToClassLine>
                      <S.ClassDateToClassTime>
                        <S.ClassDate>{el.class.date}</S.ClassDate>
                        <S.ClassStartTime>
                          시작시간 |&nbsp;&nbsp; {el.class.start}
                        </S.ClassStartTime>
                        <S.ClassRunningTime>
                          수업시간 |&nbsp;&nbsp; {el.class.runningTime}
                        </S.ClassRunningTime>
                      </S.ClassDateToClassTime>
                      <S.SmallLine></S.SmallLine>
                    </S.ClassDateToClassLine>
                    <S.ClassStartTimeTwo>
                      <div>
                        신청완료 &nbsp;&nbsp;{el.class.membersName.length}명
                      </div>
                      <div>수강인원 &nbsp;&nbsp;{el.class.member}명</div>
                    </S.ClassStartTimeTwo>
                  </S.ClassButton>
                </S.ClassArrayWrapper>
              )
            )}
          </S.ClassScheduleWrapper>
          <S.ClassScheduleUnderWrapper>
            <S.ClassPrice>{props.myClass?.price}원</S.ClassPrice>
            <S.ReservationButton onClick={props.onToggleModal}>
              취소하기
            </S.ReservationButton>
            <S.ReservationButton onClick={props.reservation}>
              예약하기
            </S.ReservationButton>
          </S.ClassScheduleUnderWrapper>
        </S.ClassSchedule>
      </S.ScheduleWrapper>
    </S.ScheduleModal>
  );
};

export default SchedulReservation;
