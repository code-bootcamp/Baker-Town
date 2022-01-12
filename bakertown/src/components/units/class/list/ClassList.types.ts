import { Dispatch, MouseEvent } from "react";

export interface IClassListPresenterProps {
  recent: [];
  sideButton: (el: string) => () => void;
  categoryName: string | string[] | undefined;
  classList: () => void;
  classDetail: (el: any) => () => void;
  setLastVisible: Dispatch<any>;
}
