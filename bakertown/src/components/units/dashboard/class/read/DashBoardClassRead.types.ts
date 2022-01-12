export interface IDashBoardClassReadProps {
  onClickDelete: (el: any) => () => void;
  class: never[];
  classDetail: (el: any) => () => void;
}
