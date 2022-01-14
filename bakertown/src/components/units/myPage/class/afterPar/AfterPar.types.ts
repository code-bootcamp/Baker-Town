import { Dispatch, SetStateAction } from "react";

export interface IAfterParPresenter {
  isOpen: boolean;
  onToggleModal: () => void;
  onClickReview: (index: number) => () => void;
  setReviewContents: Dispatch<SetStateAction<any>>;
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
  userResult: {
    afterPar: any[];
  };
  classDetail: (el: any) => () => void;
}
