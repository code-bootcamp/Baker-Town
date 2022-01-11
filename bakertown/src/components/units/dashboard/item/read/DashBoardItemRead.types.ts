import { MouseEventHandler } from "react";

export interface IDashBoardItemReadPresenterProps {
  delete: MouseEventHandler<HTMLButtonElement> | undefined;
  recent: any;
}
