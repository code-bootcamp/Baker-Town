import * as S from "./ScheduleSetting.styles";
import { DatePicker, TimePicker } from "antd";
import { IScheduleSettingPresenterProps } from "./ScheduleSetting.types";
import moment from "moment";

const ScheduleSettingPresenter = (props: IScheduleSettingPresenterProps) => {
  const format = "h:mm a";
  return (
    <>
      <S.Wrapper>
        <S.TitleWrppaer>
          <S.Title>클래스 추가</S.Title>
          <S.SmallTitle>선택사항을 모두 지정해 주세요.</S.SmallTitle>
        </S.TitleWrppaer>
        <S.ContentWrapper>
          <S.SchduleSettingWrapper>
            <S.SettingOne>
              <S.SmallTitle>클래스 날짜를 선택해 주세요.</S.SmallTitle>
              <DatePicker
                onChange={props.datePick}
                style={{ width: "115px" }}
                value={props.date !== "" ? moment(props.date) : null}
              />
            </S.SettingOne>
            <S.SettingTwoThreeWrapper>
              <S.SettingTwo>
                <S.SmallTitle>클래스 시간을 선택해 주세요.</S.SmallTitle>
                <TimePicker
                  use12Hours
                  format="h:mm a"
                  onChange={props.timePick}
                  style={{ width: "115px" }}
                  // value={props.time !== "" ? moment(props.time) : null}
                />
                <S.TimeSelect onChange={props.onChangeTime} >
                  <S.TimeOption disabled selected >
                    수업시간
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
                  <S.SmallTitle>최대 수강 인원을 지정해 주세요.</S.SmallTitle>
                  <S.CountInput type="number" onChange={props.memberChange} />명
                </S.ClassMemberCount>
              </S.SettingThree>
            </S.SettingTwoThreeWrapper>
          </S.SchduleSettingWrapper>

          <S.ScheduleWrppaer>
            <div>날짜 : {props.date}</div>
            <div>시간 : {props.time}</div>
            <div>수업시간 : {props.runningTime}</div>
            <div>최대 수강 인원 : {props.memberCount}명</div>
            <S.ScheduleSettingButton onClick={props.scheduleSetting}>
              등록하기
            </S.ScheduleSettingButton>
          </S.ScheduleWrppaer>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
};

export default ScheduleSettingPresenter;
