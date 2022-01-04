import { MutableRefObject } from "react";

export interface ILandingPresenterProps {
  popular: any;
  el: any;
  recent: any;
  prevClick: () => void;
  nextClick: () => void;
  myRef: MutableRefObject<undefined>;
}
export interface IClassSubject {
  el: any;
}
