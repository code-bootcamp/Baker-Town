import { Dispatch, SetStateAction } from "react";

export interface IDashBoardMyPageProps {
  onClickIntroduce: () => void;
  deleteAccount: () => void;
  setIntroduce: Dispatch<SetStateAction<string>>;
}
