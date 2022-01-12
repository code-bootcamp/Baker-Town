import { ChangeEvent, ChangeEventHandler } from "react";

export interface IDashBoardItemProps {
  myItem: any;
  onClickSubmit: () => void;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  isEdit?: boolean;
  onChangeCategory: ChangeEventHandler<HTMLSelectElement> | undefined;
  onClickUpdate: () => void;
}

export interface IDashBoardMainItemWriteContainerProps {
  isEdit?: boolean;
}
