import { ChangeEvent, MouseEvent, MutableRefObject } from "react";

export interface ILandingPresenterProps {
  popular: any;
  recent: any;
  currentUser: any;
  promotion: [];
  promotion2: [];
  settings: {};
  settings2: {};
  settings3: {};
  landing: () => void;
  classList: () => void;
  storeList: () => void;
  heartClass: () => void;
  signIn: () => void;
  keyWord: (event: ChangeEvent<HTMLInputElement>) => void;
  search: () => void;
  goPopular: () => void;
  goRecent: () => void;
  category: (event: MouseEvent<HTMLSpanElement>) => void;
  enterKey: () => void;
  classDetail: (el: any) => () => void;
  itemDetail: (el: any) => () => void;
  bakingList: () => void;
  // scrollPosition: number;
}
export interface IClassSubject {
  el: any;
  classDetail: () => void;
}
