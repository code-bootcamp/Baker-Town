import { ChangeEvent, ChangeEventHandler, MutableRefObject } from "react";

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
  onChangeInputs: any;
  onChangeImage2: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickUpdate: () => void;
  onChangeContents: (value: string) => void;
  contentsRef: MutableRefObject<string>;
}

export interface IDashBoardMainClassWriteContainerProps {
  isEdit?: boolean;

  // userResult: DocumentSnapshot<DocumentData>;
  // result: FetchResult<any, Record<string, any>, Record<string, any>>;
}
