export interface IStorePresenterProps {
  recent: [];
  popular: [];
  recentList: () => void;
  promotion: () => void;
  settings: {};
  settings2: {};
  storeDetail: (el: any) => () => void;
}
