import { Dispatch } from "react";

export interface IClassSchedulePresenter {
  isVisible: boolean;
  toggleModal: () => void;
  classSchedule: [];
  reset: () => void;
}

export interface IClassScheduleContainer {
  classSchedule: [];
  setClassSchedule: Dispatch<any>;
}
