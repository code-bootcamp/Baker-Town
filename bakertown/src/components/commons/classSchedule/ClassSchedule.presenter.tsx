import * as S from "./ClassSchedule.styles";
import ScheduleSettingContainer from "./scheduleSetting/ScheduleSetting.container";
import { Modal } from "antd";
import { v4 as uuidv4 } from "uuid";

const ClassSchedulePresenter = (props) => {
  return (
    <>
      <S.Wrapper>
        <S.TitleWrppaer>
          <S.Title>스케쥴 등록</S.Title>
          <S.ResetButton onClick={props.reset}>☠︎ 초기화</S.ResetButton>
        </S.TitleWrppaer>
        <S.ContentWrapper>
          <S.SchduleSettingWrapper>
            <S.SettingLeft>
              <S.SmallTitle>스케쥴 선택</S.SmallTitle>
            </S.SettingLeft>
            <S.SettingRight>
              <S.SmallTitle>수업 소요시간</S.SmallTitle>
            </S.SettingRight>
          </S.SchduleSettingWrapper>
          <S.ScheduleWrppaer>
            {props.classSchedule.map((el) => (
              <S.ClasScheduleWrapper key={uuidv4()}>
                <div>날짜: {el.class?.date}</div>
                <div>시작시간: {el.class?.start}</div>
                <div>최대인원: {el.class?.member}</div>
              </S.ClasScheduleWrapper>
            ))}
          </S.ScheduleWrppaer>
          <S.ScheduleSettingButton onClick={props.toggleModal}>
            날짜/시간 설정하기
          </S.ScheduleSettingButton>
          <Modal
            visible={props.isVisible}
            onOk={props.toggleModal}
            onCancel={props.toggleModal}
          >
            <ScheduleSettingContainer classSchedule={props.classSchedule} />
          </Modal>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
};

export default ClassSchedulePresenter;
