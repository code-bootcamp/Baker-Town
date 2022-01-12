import { ChangeEvent } from "react";

export interface IDashBoardItemProps {
  onClickSubmit: () => void;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCategory: any;
}
