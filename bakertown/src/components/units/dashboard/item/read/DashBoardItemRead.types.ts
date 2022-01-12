import { MouseEventHandler } from "react";

export interface IDashBoardItemReadPresenterProps {
  update: MouseEventHandler<HTMLButtonElement> | undefined;
  delete: MouseEventHandler<HTMLButtonElement> | undefined;
  onClickDelete: (el: any) => () => Promise<void>;

  recent: any;
}
