import { Dispatch, SetStateAction } from "react";

export interface IOrderHistoryPresenter {
  userResult: {
    name: string;
    boughtItem: never[];
  };
  isOpen: boolean;
  onToggleModal: () => void;
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
  onClickReview: (index: number) => () => void;
  // setReviewContents: Dispatch<SetStateAction<string>>;
  itemDetail: (el: any) => () => void;
  reviewRef: any;
}
