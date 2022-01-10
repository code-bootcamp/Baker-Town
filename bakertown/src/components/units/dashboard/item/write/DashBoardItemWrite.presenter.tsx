import * as S from "./DashBoardItemWrite.styles";
import { IDashBoardItemProps } from "./DashBoardItemWrite.types";

const DashBoardItemPresenter = (props: IDashBoardItemProps) => {
  return (
    <>
      <S.Wrapper>
        <div>이곳은 상품등록페이지입니다!!!</div>

        <input
          type="text"
          onChange={props.onChangeInputs}
          placeholder="제목"
          name="itemName"
        />
        <div>
          <input
            type="text"
            onChange={props.onChangeInputs}
            placeholder="내용"
            name="contents"
          />
        </div>
        <div>
          <input
            type="text"
            onChange={props.onChangeInputs}
            placeholder="가격"
            name="price"
          />
        </div>
        <div>
          <input
            type="text"
            onChange={props.onChangeInputs}
            placeholder="카테고리"
            name="category"
          />
        </div>
        <div>
          <input
            type="text"
            onChange={props.onChangeInputs}
            placeholder="배송일정"
            name="shippingTime"
          />
        </div>
        <button onClick={props.onClickSubmit}>등록하기</button>
      </S.Wrapper>
    </>
  );
};

export default DashBoardItemPresenter;
