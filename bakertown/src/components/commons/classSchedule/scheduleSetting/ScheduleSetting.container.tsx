import { useState } from "react";
import { getOnlyDate } from "../../../../commons/libraries/getDate";
import ScheduleSettingPresenter from "./ScheduleSetting.presenter";

const ScheduleSettingContainer = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [runningTime, setRunningTime] = useState("");
  const [memberCount, setMemberCount] = useState(0);

  const onChangeDatePick = (date, dateString) => {
    setDate(getOnlyDate(dateString));
  };

  const onChangeTimePick = (time, timeString) => {
    setTime(timeString);
  };

  const onChangeMemberInput = (event) => {
    setMemberCount(event.target.value);
  };

  const onChangeTime = (event) => {
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
    alert("스케쥴이 추가되었습니다.");
    props.toggleModal();
    setDate(""), setTime(""), setRunningTime(""), setMemberCount(0);
  };

  return (
    <ScheduleSettingPresenter
      datePick={onChangeDatePick}
      timePick={onChangeTimePick}
      memberChange={onChangeMemberInput}
      scheduleSetting={onClickScheduleSetting}
      date={date}
      time={time}
      memberCount={memberCount}
      runningTime={runningTime}
      onChangeTime={onChangeTime}
    />
  );
};

export default ScheduleSettingContainer;
