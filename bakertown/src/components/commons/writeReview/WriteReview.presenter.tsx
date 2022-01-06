import * as S from "./WriteReview.styles";
import { Rate } from "antd";

const WriteReviewPresenter = (props) => {
  return (
    <>
      <S.Wrapper>
        <S.TitleWrapper>별점과 리뷰를 입력해 주세요.</S.TitleWrapper>
        <Rate onChange={props.rating} value={props.value}/>
        <S.WriteReview onChange={props.reviewContents}
          type="text"
          placeholder="이곳에 리뷰를 작성해 주세요."
          name="review"
        />
      </S.Wrapper>
    </>
  );
};

export default WriteReviewPresenter;
