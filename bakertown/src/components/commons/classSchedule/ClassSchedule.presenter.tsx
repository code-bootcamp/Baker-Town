import * as S from "./ClassSchedule.styles";
import ScheduleSettingContainer from "./scheduleSetting/ScheduleSetting.container";
import { Modal } from "antd";
import { v4 as uuidv4 } from "uuid";
import { IClassSchedulePresenter } from "./ClassSchedule.types";

const ClassSchedulePresenter = (props: IClassSchedulePresenter) => {
  return (
    <>
      <S.Wrapper>
        <S.TitleWrppaer>
          <S.Title>클래스 등록</S.Title>
          <S.ResetButton onClick={props.reset}>
            <S.ResetIcon src="/imgs/reset.png"/>
            초기화</S.ResetButton>
        </S.TitleWrppaer>
        <S.ContentWrapper>
          <S.SchduleSettingWrapper>
            <S.SettingLeft>
              <S.SmallTitle>클래스 일정을 선택해 주세요.</S.SmallTitle>
            </S.SettingLeft>
            <S.SettingRight></S.SettingRight>
          </S.SchduleSettingWrapper>
          <S.ScheduleWrppaer>
            {props.classSchedule?.map((el: any) => (
              <S.ClassScheduleWrapper key={uuidv4()}>
                <S.ClassDate>날짜: {el.class?.date}&nbsp;&nbsp;</S.ClassDate>
                <S.StartTime>시작시간: {el.class?.start}&nbsp;&nbsp;</S.StartTime>
                <S.RunningTime>수업시간: {el.class?.runningTime}&nbsp;&nbsp;</S.RunningTime>
                <S.MaximumPeople>최대인원: {el.class?.member}명</S.MaximumPeople>
              </S.ClassScheduleWrapper>
            ))}
          </S.ScheduleWrppaer>
          <S.ScheduleSettingButton onClick={props.toggleModal}>
            클래스 추가하기
          </S.ScheduleSettingButton>
          <Modal
            width={680}
            visible={props.isVisible}
            onOk={props.toggleModal}
            onCancel={props.toggleModal}
          >
            <ScheduleSettingContainer
              classSchedule={props.classSchedule}
              toggleModal={props.toggleModal}
            />
          </Modal>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
};

export default ClassSchedulePresenter;
