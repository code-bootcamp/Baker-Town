import WriteReviewPresenter from "./WriteReview.presenter";
import { IWriteReviewContainerProps } from "./WriteReview.types";

const WriteReviewContainer = (props: IWriteReviewContainerProps) => {
  const onChangeRating = (value: number) => {
    props.setRating(value);
  };

  return (
    <WriteReviewPresenter
      rating={onChangeRating}
      value={props.rating}
      onToggleModal={props.onToggleModal}
      onClickReview={props.onClickReview}
      reviewRef={props.reviewRef}
    />
  );
};

export default WriteReviewContainer;
