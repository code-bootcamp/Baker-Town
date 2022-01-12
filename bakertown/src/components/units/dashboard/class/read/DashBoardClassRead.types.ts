import { MouseEventHandler } from "react";

export interface IDashBoardClassReadProps {
  update(el: any): MouseEventHandler<HTMLButtonElement> | undefined;
  onClickDelete: () => void;
}
