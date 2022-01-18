import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 600px;
  height: 500px;
  /* padding-bottom: 20px; */
  /* border: 1px solid black; */
`;

export const TitleWrppaer = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  width: 560px;
`;

export const Title = styled.div`
  font-size: 23px;
  font-weight: 700;
`;

export const ResetButton = styled.button`
  background-color: transparent;
`;

export const ContentWrapper = styled.div`
  width: 620px;
  height: 425px;
  padding-top: 10px;
  padding-left: 10px;
`;

export const SchduleSettingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.06);
  padding-left: 10px;
  padding-bottom: 10px;
`;

export const SmallTitle = styled.div`
  margin-top: 10px;
`;

export const SettingOne = styled.div``;

export const SettingTwoThreeWrapper = styled.div``;

export const SettingTwo = styled.div``;

export const SettingThree = styled.div``;

export const ClassMemberCount = styled.div``;

export const CountInput = styled.input`
  width: 46px;
  height: 30px;
  border: 1px solid lightgrey;
`;

export const ScheduleWrppaer = styled.div`
  width: 530px;
  height: 200px;
  margin-top: 5px;
  /* background: green; */
`;

export const ScheduleSettingButton = styled.button`
  margin-top: 12px;
  margin-left: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 30px;
  border: none;
  background: #eaeaea;
  border-radius: 2px;
  font-size: 15px;

  cursor: pointer;

  :hover {
    /* background-color: rgba(0, 0, 0, 0.06); */
    font-weight: bold;
    border-bottom: 1px solid black;
    /* cursor: pointer; */
  }
`;

export const TimeSelect = styled.select`
  height: 31px;
  margin-left: 10px;
  font-size: 15px;
  border: 1px solid lightgrey;
`;

export const TimeOption = styled.option``;
