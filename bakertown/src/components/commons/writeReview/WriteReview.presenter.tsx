import * as S from "./WriteReview.styles";
import { Rate } from "antd";
import { IWriteReviewPresetnerProps } from "./WriteReview.types";

const WriteReviewPresenter = (props: IWriteReviewPresetnerProps) => {
  return (
    <S.Modal>
      <S.Wrapper>
        <S.TitleWrapper>별점과 리뷰를 입력해 주세요.</S.TitleWrapper>
        <Rate onChange={props.rating} value={props.value} />
        <S.WriteReview
          // onChange={props.onChangeReviewContents}
          type="text"
          placeholder="이곳에 리뷰를 작성해 주세요."
          name="review"
          ref={props.reviewRef}
        />
        <S.ButtonWrapper>
          <S.ModalButton onClick={props.onClickReview(0)}>확인</S.ModalButton>
          <S.ModalButton onClick={props.onToggleModal}>취소</S.ModalButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.Modal>
  );
};

export default WriteReviewPresenter;
