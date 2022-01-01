import * as S from "./DashBoardClassWrite.styles";
import { IDashBoardClassWriteProps } from "./DashBoardClassWrite.types";
import { DatePicker } from "antd";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";

const DashBoardMainClassWritePresenter = (props: IDashBoardClassWriteProps) => {
  return (
    <S.Wrapper>
      <>
        <div>클래스 등록 페이지</div>
        <input
          type="text"
          onChange={props.onChangeInputs}
          placeholder="제목"
          name="className"
        />
        <input
          type="text"
          onChange={props.onChangeInputs}
          placeholder="카테고리"
          name="category"
        />
        <input
          type="text"
          onChange={props.onChangeInputs}
          placeholder="한줄 요약"
          name="remarks"
        />
        <input
          type="text"
          onChange={props.onChangeInputs}
          placeholder="내용"
          name="contents"
        />
        <input
          type="text"
          onChange={props.onChangeInputs}
          placeholder="가격"
          name="price"
        />
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
