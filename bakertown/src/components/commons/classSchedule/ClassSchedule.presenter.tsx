import * as S from "./ClassSchedule.styles";

const ClassSchedulePresenter = () => {
  return (
    <>
      <S.Wrapper>
        <S.TitleWrppaer>
          <S.Title>스케쥴 등록</S.Title>
          <S.ResetButton>☠︎ 초기화</S.ResetButton>
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
          <S.ScheduleWrppaer></S.ScheduleWrppaer>
          <S.ScheduleSettingButton>날짜/시간 설정하기</S.ScheduleSettingButton>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
};

export default ClassSchedulePresenter;
