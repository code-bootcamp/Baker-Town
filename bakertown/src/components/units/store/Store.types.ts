export interface IStorePresenterProps {
  recent: [];
  popular: [];
  recentList: () => void;
  settings: {};
  settings2: {};
  storeDetail: (el: any) => () => void;
}
