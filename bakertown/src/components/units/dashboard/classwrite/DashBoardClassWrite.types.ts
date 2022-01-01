import { ChangeEvent } from "react";

export interface IDashBoardClassWriteProps {
  isOpen: boolean;
  onToggleModal: () => void;
  handleComplete: (data: any) => void;
  onChangeDate: (dateString: string) => void;
  onChangeMembers: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeImage: (event: ChangeEvent<HTMLInputElement>) => void;
}
