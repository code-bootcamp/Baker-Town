import { useEffect, useState } from "react";
import ClassSchedulePresenter from "./ClassSchedule.presenter";

const ClassScheduleContainer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [classSchedule, setClassSchedule] = useState([]);

  const toggleModal = () => {
    setIsVisible((prev) => !prev);
  };
  const reset = () => {
    setClassSchedule([]);
  };

  return (
    <ClassSchedulePresenter
      isVisible={isVisible}
      toggleModal={toggleModal}
      classSchedule={classSchedule}
      reset={reset}
    />
  );
};

export default ClassScheduleContainer;
