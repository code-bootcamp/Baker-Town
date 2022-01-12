export interface IWishListPresenter {
  userResult: {
    name: string;
    heart: never[];
  };
  classDetail: (el: any) => () => void;
}
