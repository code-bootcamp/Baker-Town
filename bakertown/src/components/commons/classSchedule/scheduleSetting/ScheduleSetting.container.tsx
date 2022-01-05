import { useState } from "react";
import { getOnlyDate } from "../../../../commons/libraries/getDate";
import ScheduleSettingPresenter from "./ScheduleSetting.presenter";

const ScheduleSettingContainer = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
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

  const onClickScheduleSetting = () => {
    const classObject = {
      class: {
        start: time,
        member: memberCount,
        membersName: [],
        date: date,
      },
    };
    props.classSchedule?.push(classObject);
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
    />
  );
};

export default ScheduleSettingContainer;
