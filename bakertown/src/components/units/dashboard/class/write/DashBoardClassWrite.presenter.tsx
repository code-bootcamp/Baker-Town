import * as S from "./DashBoardClassWrite.styles";
import { IDashBoardClassWriteProps } from "./DashBoardClassWrite.types";
import { DatePicker } from "antd";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";

const DashBoardMainClassWritePresenter = (props: IDashBoardClassWriteProps) => {
  return (
    <S.Wrapper>
      <>
        <S.Title>클래스 등록 페이지</S.Title>

        <S.ClassNameWrapper>
          <S.ClassNameTitle>클래스 제목</S.ClassNameTitle>
          <S.ClassName
            type="text"
            onChange={props.onChangeInputs}
            placeholder="클래스 제목을 입력해 주세요.(40글자 제한)"
            name="className"
          />
        </S.ClassNameWrapper>

        <S.ClassPatissierWrapper>
          <S.ClassPatissierTitle>파티셰</S.ClassPatissierTitle>
          <S.ClassPatissier
            type="text"
            onChange={props.onChangeInputs}
            placeholder="파티셰 활동명을 입력해 주세요."
            name="patissier"
          />
        </S.ClassPatissierWrapper>

        <S.ClassCategoryWrapper>
          <S.ClassCategoryTitle>카테고리 등록</S.ClassCategoryTitle>
          <S.ClassCategorySelect onChange={props.onChangeInputs}>
            <S.ClassCategoryOption>베이킹</S.ClassCategoryOption>
            <S.ClassCategoryOption>마카롱</S.ClassCategoryOption>
            <S.ClassCategoryOption>커피</S.ClassCategoryOption>
            <S.ClassCategoryOption>케이크</S.ClassCategoryOption>
            <S.ClassCategoryOption>쿠키</S.ClassCategoryOption>
            <S.ClassCategoryOption>쇼콜라</S.ClassCategoryOption>
          </S.ClassCategorySelect>
        </S.ClassCategoryWrapper>
        <S.ClassRemarksWrapper>
          <S.ClassRemarksTitle>클래스 한 줄 요약</S.ClassRemarksTitle>
          <S.ClassRemarks
            type="text"
            onChange={props.onChangeInputs}
            placeholder="한줄 요약"
            name="remarks"
          />
        </S.ClassRemarksWrapper>
        <S.ClassContentsWrapper>
          <S.ClassContentsTitle>클래스 내용</S.ClassContentsTitle>
          <S.ClassContents
            type="text"
            onChange={props.onChangeInputs}
            placeholder="내용"
            name="contents"
          />
        </S.ClassContentsWrapper>
        <S.ClassPriceWrapper>
          <S.ClassPriceTitle></S.ClassPriceTitle>
          <S.ClassPrice
            type="text"
            onChange={props.onChangeInputs}
            placeholder="가격"
            name="price"
          />
        </S.ClassPriceWrapper>
        <div>
          <button onClick={props.onToggleModal}>우편번호 검색</button>
          {props.isOpen && (
            <Modal
              title="우편번호 검색"
              visible={true}
              onOk={props.onToggleModal}
              onCancel={props.onToggleModal}
              // style={{ backgroundColor: "yellow" }}
            >
              <DaumPostcode onComplete={props.handleComplete} />
            </Modal>
          )}
        </div>
        <input type="file" onChange={props.onChangeImage} />
        {/* 날짜 및 시간 받아내기 */}
        <DatePicker
          placeholder="클래스 오픈 날짜"
          onChange={props.onChangeDate}
        />
        {/* 인원 받기 */}
        <input
          type="number"
          onChange={props.onChangeMembers}
          placeholder="최대인원"
        />
        <button onClick={props.onClickSubmit}>등록하기</button>
      </>
    </S.Wrapper>
  );
};
export default DashBoardMainClassWritePresenter;
