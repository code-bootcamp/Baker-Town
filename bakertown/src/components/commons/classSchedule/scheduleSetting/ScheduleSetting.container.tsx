import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { getOnlyDate } from "../../../../commons/libraries/getDate";
import ScheduleSettingPresenter from "./ScheduleSetting.presenter";
import { IScheduleSettingContainer } from "./ScheduleSetting.types";
import { message } from "antd";

const ScheduleSettingContainer = (props: IScheduleSettingContainer) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [runningTime, setRunningTime] = useState("");
  const [memberCount, setMemberCount] = useState(0);

  const onChangeDatePick = (date: any, dateString: string) => {
    setDate(dateString);
  };

  const onChangeTimePick = (time: any, timeString: string) => {
    setTime(timeString);
  };

  const onChangeMemberInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) < 1) {
      message.error("수강 인원을 1명 이상 선택해 주세요.", 1.5);
      event.target.value = "1";
    }
    setMemberCount(Number(event.target.value));
  };

  const onChangeTime = (event: any) => {
    setRunningTime(event.target.value);
  };

  const onClickScheduleSetting = () => {
    const classObject = {
      class: {
        start: time,
        member: memberCount,
        membersName: [],
        date: date,
        runningTime,
      },
    };
    props.classSchedule?.push(classObject);
    message.success("클래스가 추가되었습니다.");
    props.toggleModal();
    setDate(""), setTime(""), setRunningTime(""), setMemberCount(0);
  };

  return (
    <ScheduleSettingPresenter
      datePick={onChangeDatePick}
      timePick={onChangeTimePick}
      memberChange={onChangeMemberInput}
      scheduleSetting={onClickScheduleSetting}
      onChangeTime={onChangeTime}
      date={date}
      time={time}
      runningTime={runningTime}
      memberCount={memberCount}
    />
  );
};

export default ScheduleSettingContainer;
