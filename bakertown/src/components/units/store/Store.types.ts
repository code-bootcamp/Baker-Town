export interface IStorePresenterProps {
  recent: [];
  popular: [];
  recentList: () => void;
  settings: {};
  storeDetail: (el: any) => () => void;
}
