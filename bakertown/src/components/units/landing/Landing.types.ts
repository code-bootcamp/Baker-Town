import { MutableRefObject } from "react";

export interface ILandingPresenterProps {
  prevClick: () => void;
  nextClick: () => void;
  myRef: MutableRefObject<undefined>;
}
export interface IClassSubject {
  el: any;
}
