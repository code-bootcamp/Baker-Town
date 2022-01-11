import { FetchResult } from "@apollo/client";
import { DocumentData, DocumentSnapshot } from "firebase/firestore";
import { ChangeEvent, ChangeEventHandler, MouseEventHandler } from "react";

export interface IDashBoardClassWriteProps {
  setClassSchedule: any;
  classSchedule: any;
  toggleScheduleModal: any;
  onChangeCategory: ChangeEventHandler<HTMLSelectElement> | undefined;
  myClass: any;
  isEdit?: boolean;
  isOpen: boolean;
  isVisible: boolean;
  address?: string;
  onToggleModal: () => void;
  handleComplete: (data: any) => void;
  onChangeDate: (dateString: string) => void;
  onChangeMembers: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeImage2: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickUpdate: () => void;
}

export interface IDashBoardMainClassWriteContainerProps {
  isEdit?: boolean;

  // userResult: DocumentSnapshot<DocumentData>;
  // result: FetchResult<any, Record<string, any>, Record<string, any>>;
}
