export interface IStorePresenterProps {
  recent: [];
  popular: [];
  recentList: () => void;
  promotion: [];
  settings: {};
  settings2: {};
  storeDetail: (el: any) => () => void;
}
