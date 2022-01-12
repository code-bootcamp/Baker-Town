export interface IDashBoardItemReadPresenterProps {
  update: MouseEventHandler<HTMLButtonElement> | undefined;
  delete: MouseEventHandler<HTMLButtonElement> | undefined;
  onClickDelete: (el: any) => () => void;
  recent: never[];
}
