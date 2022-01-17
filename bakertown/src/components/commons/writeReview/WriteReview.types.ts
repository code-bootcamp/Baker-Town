import { ChangeEvent, Dispatch, MutableRefObject, SetStateAction } from "react";

export interface IWriteReviewContainerProps {
  onToggleModal: () => void;
  onClickReview: (index: number) => () => void;
  // setReviewContents: Dispatch<SetStateAction<string>>;
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
  reviewRef: MutableRefObject<null>;
  index: number;
}

export interface IWriteReviewPresetnerProps {
  // reviewContents: (event: ChangeEvent<HTMLInputElement>) => void;
  rating: (value: number) => void;
  value: number;
  onToggleModal: () => void;
  onClickReview: (index: number) => () => void;
  reviewRef: MutableRefObject<null>;
  index: number;
}
