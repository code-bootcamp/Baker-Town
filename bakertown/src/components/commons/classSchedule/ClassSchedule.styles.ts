import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 600px;
  height: 350px;
  /* border: 1px solid black; */
`;

export const TitleWrppaer = styled.div`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 560px;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 23px;
  font-weight: bold;
`;

export const ResetButton = styled.button`
  display: flex;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid lightgrey;
  padding-top: 4px;
`;

export const ResetIcon = styled.img`
  width: 20px;
  padding-top: 3px;
  margin-right: 2px;
`;

export const ContentWrapper = styled.div`
  width: 560px;
  height: 300px;
  /* border: 1px solid black; */
  margin-left: 4px;
`;

export const SchduleSettingWrapper = styled.div`
  width: 530px;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const SmallTitle = styled.div`
  padding-left: 4px;
`;

export const SettingLeft = styled.div``;

export const SettingRight = styled.div``;

export const ScheduleWrppaer = styled.div`
  width: 590px;
  height: 200px;
  margin-left: 14px;
  padding-top: 12px;
  padding-left: 20px;
  background-color: rgba(0, 0, 0, 0.06);;
`;

export const ClassScheduleWrapper = styled.div`
  display: flex;
  margin-bottom: 5px;
  /* background: yellow; */
`;

export const ClassDate = styled.div``

export const StartTime = styled.div``

export const RunningTime = styled.div`
  width: 130px;
`

export const MaximumPeople = styled.div``

export const ScheduleSettingButton = styled.button`
  margin-top: 20px;
  margin-left: 17px;
  width: 140px;
  border: none;
  background-color: skyblue;
  color: white;
  cursor: pointer;

  :hover {
    border-bottom: 1px solid black;
    /* cursor: pointer; */
  }
`;
