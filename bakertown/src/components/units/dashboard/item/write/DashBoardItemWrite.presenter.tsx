import * as S from "./DashBoardItemWrite.styles";
import { IDashBoardItemProps } from "./DashBoardItemWrite.types";

const DashBoardItemPresenter = (props: IDashBoardItemProps) => {
  return (
    <>
      <S.Wrapper>
        <S.Title>아이템 등록 페이지</S.Title>
        <S.ItemNameWrapper>
          <S.ItemNameTitle>상품명 입력</S.ItemNameTitle>
          <S.ItemName
            type="text"
            onChange={props.onChangeInputs}
            placeholder="상품명을 입력해 주세요.(20자 제한)"
            name="itemName"
            maxLength={20}
          />
        </S.ItemNameWrapper>
        <S.ItemContentsWrapper>
          <S.ItemContentsTitle>아이템 소개 입력</S.ItemContentsTitle>
          <S.ItemContents 
          type="text"
          onChange={props.onChangeInputs}
          placeholder="상품 설명을 자세히 입력해 주세요.(400자 제한)"
          name="contents"
          maxLength={400}
          />
        </S.ItemContentsWrapper>
        <S.ItemCategoryWrapper>
          <S.ItemCategoryTitle>카테고리 등록</S.ItemCategoryTitle>
          <S.ItemCategorySelect onChange={props.onChangeCategory}>
            <S.ItemCategoryOption value="냄비•프라이팬•솥">
              냄비•프라이팬•솥
            </S.ItemCategoryOption>
            <S.ItemCategoryOption value="주방잡화">
              주방잡화
            </S.ItemCategoryOption>
            <S.ItemCategoryOption value="커피•티용품">
              커피•티용품
            </S.ItemCategoryOption>
            <S.ItemCategoryOption value="베이킹용품">
              베이킹용품
            </S.ItemCategoryOption>
            <S.ItemCategoryOption value="이벤트">이벤트</S.ItemCategoryOption>
          </S.ItemCategorySelect>
        </S.ItemCategoryWrapper>
        <S.ItemImageWrapper>
          <S.ItemImageTitle>아이템 이미지 등록</S.ItemImageTitle>
          <S.ItemImage />
        </S.ItemImageWrapper>
        <S.ItemPriceWrapper>
          <S.ItemPriceTitle>아이템 가격</S.ItemPriceTitle>
          <S.ItemPrice
            type="text"
            onChange={props.onChangeInputs}
            placeholder="판매가를 입력해 주세요."
            name="price"
          />
        </S.ItemPriceWrapper>
        <S.DeliveryScheduleWrapper>
          <S.DeliveryTitle>배송일정</S.DeliveryTitle>
          <S.DeliverySchedule
            type="text"
            onChange={props.onChangeInputs}
            placeholder="배송일정"
            name="shippingTime"
          />
        </S.DeliveryScheduleWrapper>
        <S.SubmitButton onClick={props.onClickSubmit}>등록하기</S.SubmitButton>
      </S.Wrapper>
    </>
  );
};

export default DashBoardItemPresenter;
