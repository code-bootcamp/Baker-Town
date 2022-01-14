import { ChangeEvent } from "react";
import WriteReviewPresenter from "./WriteReview.presenter";
import { IWriteReviewContainerProps } from "./WriteReview.types";

const WriteReviewContainer = (props: IWriteReviewContainerProps) => {
  // const getDebounce = _.debounce((data) => {
  //   props.setReviewContents(data);
  // }, 1000);

  const onChangeReviewContents = (event: ChangeEvent<HTMLInputElement>) => {
    props.setReviewContents(event.target.value);
    // getDebounce(event.target.value);
    // setTimeout(() => props.setReviewContents(event.target.value), 1000);
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
