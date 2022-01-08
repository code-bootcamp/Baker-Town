import * as S from "./ScheduleSetting.styles";
import { DatePicker, TimePicker } from "antd";

const ScheduleSettingPresenter = (props) => {
  return (
    <>
      <S.Wrapper>
        <S.TitleWrppaer>
          <S.Title>스케쥴 추가</S.Title>
          <S.SmallTitle>모두 선택해 주세요.</S.SmallTitle>
        </S.TitleWrppaer>
        <S.ContentWrapper>
          <S.SchduleSettingWrapper>
            <S.SettingOne>
              <S.SmallTitle>클래스 날짜를 선택해 주세요.</S.SmallTitle>
              <DatePicker onChange={props.datePick} />
            </S.SettingOne>
            <S.SettingTwoThreeWrapper>
              <S.SettingTwo>
                <S.SmallTitle>클래스 시간을 선택해 주세요.</S.SmallTitle>
                <TimePicker
                  use12Hours
                  format="h:mm a"
                  onChange={props.timePick}
                />
                <S.TimeSelect onChange={props.onChangeTime}>
                  <S.TimeOption disabled selected>
                    클래스 소요시간
                  </S.TimeOption>
                  <S.TimeOption value="30분">30분</S.TimeOption>
                  <S.TimeOption value="1시간">1시간</S.TimeOption>
                  <S.TimeOption value="1시간 30분">1시간 30분</S.TimeOption>
                  <S.TimeOption value="2시간">2시간</S.TimeOption>
                  <S.TimeOption value="2시간 30분">2시간 30분</S.TimeOption>
                  <S.TimeOption value="3시간">3시간</S.TimeOption>
                </S.TimeSelect>
              </S.SettingTwo>
              <S.SettingThree>
                <S.ClassMemberCount>
                  <S.SmallTitle>참여 가능 인원</S.SmallTitle>
                  <S.CountInput type="number" onChange={props.memberChange} />
                </S.ClassMemberCount>
              </S.SettingThree>
            </S.SettingTwoThreeWrapper>
          </S.SchduleSettingWrapper>
          <S.ScheduleWrppaer>
            <div>날짜: {props.date}</div>
            <div>시간: {props.time}</div>
            <div>수업시간: {props.runningTime}</div>
            <div>최대인원: {props.memberCount}</div>
          </S.ScheduleWrppaer>
          <S.ScheduleSettingButton onClick={props.scheduleSetting}>
            등록하기
          </S.ScheduleSettingButton>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
};

export default ScheduleSettingPresenter;
