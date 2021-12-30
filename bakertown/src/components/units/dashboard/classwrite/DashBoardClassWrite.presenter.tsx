import * as S from "./DashBoardClassWrite.styles";
import { IDashBoardClassWriteProps } from "./DashBoardClassWrite.types";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useState } from "react";
import { firebaseApp } from "../../../../../pages/_app";
import { TimePicker } from "antd";
import { DatePicker } from "antd";
import {
  getDate,
  getOnlyDate,
} from "../../../../../src/commons/libraries/getDate";
import { plusMyung } from "../../../../../src/commons/libraries/stringConcatenate";

const DashBoardMainClassWritePresenter = (props: IDashBoardClassWriteProps) => {
  const [date, setDate] = useState("");

  const [members, setMembers] = useState("");
  const [myInputs, setMyInputs] = useState({
    className: "",
    category: "",
    contents: "",
    price: "",
    address: "",
    createdAt: "",
  });

  // 날짜 설정
  function onChangeDate(dateString) {
    setDate(getOnlyDate(dateString));
  }

  // 최대인원 수 설정
  const onChangeMembers = (event) => {
    setMembers(plusMyung(event.target.value));
  };

  // 클래스 등록
  const onClickSubmit = async () => {
    // 등록 날짜 및 시간 설정
    myInputs.applyclass = {
      [date]: {
        first: {
          first: {
            members: members,
          },
        },
      },
    };
    myInputs.createdAt = getDate(new Date());
    console.log(myInputs);
    const dashboardclasswrite = collection(
      // db
      getFirestore(firebaseApp),
      // 컬렉션
      "dashboardclasswrite"
    );
    // 추가 내용
    await addDoc(dashboardclasswrite, {
      ...myInputs,
    });
  };

  // 인풋 값 변경 시 state에 저장
  const onChangeInputs = (event) => {
    setMyInputs({
      className: myInputs.className,
      contents: myInputs.contents,
      category: myInputs.category,
      address: myInputs.address,
      price: myInputs.price,
      createdAt: "",
      [event.target.name]: event.target.value,
    });
  };

  return (
    <S.Wrapper>
      <>
        <div>클래스 등록 페이지</div>
        <input
          type="text"
          onChange={onChangeInputs}
          placeholder="제목"
          name="className"
        />
        <input
          type="text"
          onChange={onChangeInputs}
          placeholder="카테고리"
          name="category"
        />
        <input
          type="text"
          onChange={onChangeInputs}
          placeholder="내용"
          name="contents"
        />
        <input
          type="text"
          onChange={onChangeInputs}
          placeholder="가격"
          name="price"
        />
        <input
          type="text"
          onChange={onChangeInputs}
          placeholder="주소"
          name="address"
        />
        {/* 날짜 및 시간 받아내기 */}
        <DatePicker placeholder="클래스 오픈 날짜" onChange={onChangeDate} />
        {/* 인원 받기 */}
        <input
          type="number"
          onChange={onChangeMembers}
          placeholder="최대인원"
        />
        <button onClick={onClickSubmit}>등록하기</button>
      </>
    </S.Wrapper>
  );
};
export default DashBoardMainClassWritePresenter;
