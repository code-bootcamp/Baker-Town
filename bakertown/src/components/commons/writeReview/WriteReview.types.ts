import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IWriteReviewContainerProps {
  setReviewContents: Dispatch<SetStateAction<string>>;
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
}

export interface IWriteReviewPresetnerProps {
  reviewContents: (event: ChangeEvent<HTMLInputElement>) => void;
  rating: (value: number) => void;
  value: number;
}
