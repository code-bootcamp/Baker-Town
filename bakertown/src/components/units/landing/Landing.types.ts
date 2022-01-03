import { MutableRefObject } from "react";

export interface ILandingPresenterProps {
  prevClick: () => void;
  nextClick: () => void;
  myRef: MutableRefObject<string>;
  scrollLeft: () => void;
}
export interface IClassSubject {
  el: any;
}
