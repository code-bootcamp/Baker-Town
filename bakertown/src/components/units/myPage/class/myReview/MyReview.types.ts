export interface IMyReviewPresenterProps {
  userResult: {
    name: string;
    review: never[];
  };
  classDetail: (el: any) => () => void;
}
