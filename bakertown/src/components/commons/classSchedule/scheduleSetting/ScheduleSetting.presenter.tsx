import * as S from "./ScheduleSetting.styles";
import { DatePicker, TimePicker } from "antd";

const ScheduleSettingPresenter = () => {
  return (
    <>
      <S.Wrapper>
        <S.TitleWrppaer>
          <S.Title>스케쥴 등록</S.Title>
          <S.SmallTitle>시작일 기준으로 사용자에게 안내됩니다.</S.SmallTitle>
        </S.TitleWrppaer>
        <S.ContentWrapper>
          <S.SchduleSettingWrapper>
            <S.SettingOne>
              <S.SmallTitle>클래스 날짜를 선택해 주세요.</S.SmallTitle>
              <DatePicker />
            </S.SettingOne>
            <div>
              <S.SettingTwo>
                <S.SmallTitle>클래스 시간을 선택해 주세요.</S.SmallTitle>
                <TimePicker use12Hours format="h:mm a" />
                <S.TimeSelect>
                  <S.TimeOption>30분</S.TimeOption>
                  <S.TimeOption>1시간</S.TimeOption>
                  <S.TimeOption>1시간 30분</S.TimeOption>
                  <S.TimeOption>2시간</S.TimeOption>
                  <S.TimeOption>2시간 30분</S.TimeOption>
                  <S.TimeOption>3시간</S.TimeOption>
                </S.TimeSelect>
              </S.SettingTwo>
              {/* <S.SettingThree>

              </S.SettingThree> */}
            </div>
          </S.SchduleSettingWrapper>
          <S.ScheduleWrppaer></S.ScheduleWrppaer>
          <S.ScheduleSettingButton>날짜/시간 설정하기</S.ScheduleSettingButton>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
};

export default ScheduleSettingPresenter;
