import { style } from "@mui/system";
import * as S from "./DashBoardItemWrite.styles";
import { IDashBoardItemProps } from "./DashBoardItemWrite.types";

const DashBoardItemPresenter = (props: IDashBoardItemProps) => {
  return (
    <>
      <S.Wrapper>
        <S.Title>아이템 {props.isEdit ? "수정" : "등록"} 페이지</S.Title>
        <S.ItemNameWrapper>
          <S.ItemNameTitle>상품명 입력</S.ItemNameTitle>
          <S.ItemName
            type="text"
            onChange={props.onChangeInputs}
            placeholder="상품명을 입력해 주세요.(24자 제한)"
            name="itemName"
            defaultValue={props.myItem?.itemName}
            maxLength={24}
          />
        </S.ItemNameWrapper>
        <S.ItemContentsWrapper>
          <S.ItemContentsTitle>아이템 소개 입력</S.ItemContentsTitle>
          <S.ItemContents
            type="text"
            onChange={props.onChangeInputs}
            placeholder="상품 설명을 자세히 입력해 주세요.(400자 제한)"
            name="contents"
            defaultValue={props.myItem?.contents}
            maxLength={400}
          />
        </S.ItemContentsWrapper>
        <S.ItemCategoryWrapper>
          <S.ItemCategoryTitle>카테고리 등록</S.ItemCategoryTitle>
          <S.ItemCategorySelect
            onChange={props.onChangeCategory}
            defaultValue={props.myItem?.category}
          >
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
            <input
              multiple={true}
              type="file"
              onChange={props.onChangeImage2}
            />
          </S.ItemCategorySelect>
        </S.ItemCategoryWrapper>
        <S.ItemImageWrapper>
          <S.ItemImageTitle>아이템 이미지 등록</S.ItemImageTitle>
          <input multiple={true} type="file" onChange={props.onChangeImage2} />
          {/* <S.ItemImage /> */}
        </S.ItemImageWrapper>
        <S.ItemPriceWrapper>
          <S.ItemPriceTitle>아이템 가격</S.ItemPriceTitle>
          <S.ItemPrice
            type="number"
            onChange={props.onChangeInputs}
            placeholder="판매가를 입력해 주세요."
            name="price"
            defaultValue={props.myItem?.price}
          />
        </S.ItemPriceWrapper>
        <S.DeliveryScheduleWrapper>
          <S.DeliveryTitle>배송일정</S.DeliveryTitle>
          <S.DeliverySchedule
            type="text"
            onChange={props.onChangeInputs}
            placeholder="배송과정에 대한 설명을 입력해 주세요."
            name="shippingTime"
            defaultValue={props.myItem?.shippingTime}
          />
        </S.DeliveryScheduleWrapper>
        {!props.isEdit && (
          <S.SubmitButton onClick={props.onClickSubmit}>
            등록하기
          </S.SubmitButton>
        )}
        {props.isEdit && (
          <S.SubmitButton onClick={props.onClickUpdate}>
            수정하기
          </S.SubmitButton>
        )}
      </S.Wrapper>
    </>
  );
};

export default DashBoardItemPresenter;
