import WriteReviewPresenter from "./WriteReview.presenter"

const WriteReviewContainer = (props) => {
    const onChangeReviewContents = (event) => {
        props.setReviewContents(event?.target.value)
    }

    const onChangeRating = (value) => {
        props.setRating(value)
    }
    return(
        <WriteReviewPresenter reviewContents={onChangeReviewContents}
        rating={onChangeRating}
        value={props.rating}
        />
    )
}

export default WriteReviewContainer