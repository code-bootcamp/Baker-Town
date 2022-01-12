export interface IReviewPresenter {
  userResult: {
    name: string;
    itemReview: never[];
  };
  itemDetail: (el: any) => () => void;
}
