export interface IDashBoardClassReadProps {
  onClickDelete: (el: any) => () => void;
  class: never[];
  classDetail: (el: any) => () => void;
  update: (el: any) => () => void;
}
