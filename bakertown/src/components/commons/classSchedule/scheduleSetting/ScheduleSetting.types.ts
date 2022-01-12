import { ChangeEvent, ChangeEventHandler } from "react";

export interface IScheduleSettingPresenterProps {
  datePick: (date: any, dateString: string) => void;
  timePick: (time: any, timeString: string) => void;
  memberChange: (event: ChangeEvent<HTMLInputElement>) => void;
  scheduleSetting: () => void;
  onChangeTime: (event: any) => void;
  date: string;
  time: string;
  runningTime: string;
  memberCount: number;
}

export interface IScheduleSettingContainer {
  classSchedule: any;
  toggleModal: () => void;
}
