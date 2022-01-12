import { ChangeEvent } from "react";
import WriteReviewPresenter from "./WriteReview.presenter";
import { IWriteReviewContainerProps } from "./WriteReview.types";

const WriteReviewContainer = (props: IWriteReviewContainerProps) => {
  const onChangeReviewContents = (event: ChangeEvent<HTMLInputElement>) => {
    props.setReviewContents(event.target.value);
  };

  const onChangeRating = (value: number) => {
    props.setRating(value);
  };
  return (
    <WriteReviewPresenter
      reviewContents={onChangeReviewContents}
      rating={onChangeRating}
      value={props.rating}
    />
  );
};

export default WriteReviewContainer;
