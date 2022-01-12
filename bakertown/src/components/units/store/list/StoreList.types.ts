export interface IStoreListPresenter {
  recent: never[];
  categoryName: string | string[] | undefined;
  onClickSideButton: (el: string) => () => void;
  onClickDetail: (el: any) => () => void;
  itemList: () => void;
}
