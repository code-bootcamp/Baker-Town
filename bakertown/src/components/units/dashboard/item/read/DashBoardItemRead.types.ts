export interface IDashBoardItemReadPresenterProps {
  update: (el: any) => () => void;
  onClickDelete: (el: any) => () => void;
  recent: never[];
}
