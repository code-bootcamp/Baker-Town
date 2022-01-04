import * as S from "./DashBoardItemWrite.styles";
import { IDashBoardItemProps } from "./DashBoardItemWrite.types";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { ChangeEvent, useState } from "react";
import { firebaseApp } from "../../../../../../pages/_app";
import { getDate } from "../../../../../commons/libraries/getDate";

const DashBoardItemPresenter = (props: IDashBoardItemProps) => {
  const [myInputs, setMyInputs] = useState({
    itemName: "",
    contents: "",
    price: "",
    createdAt: "",
  });

  // 아이템 등록
  const onClickSubmit = async () => {
    myInputs.createdAt = getDate(new Date());
    console.log(myInputs);
    const applyitems = collection(
      // db
      getFirestore(firebaseApp),
      // 컬렉션
      "item"
    );
    // 추가 내용
    await addDoc(applyitems, {
      ...myInputs,
    });
  };

  // 인풋 값 변경 시 state에 저장
  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setMyInputs({
      itemName: myInputs.itemName,
      contents: myInputs.contents,
      price: myInputs.price,
      createdAt: "",
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <S.Wrapper>
        <div>이곳은 상품등록페이지입니다!!!</div>

        <input
          type="text"
          onChange={onChangeInputs}
          placeholder="제목"
          name="itemName"
        />

        <div>
          <input
            type="text"
            onChange={onChangeInputs}
            placeholder="내용"
            name="contents"
          />
        </div>

        <div>
          <input
            type="text"
            onChange={onChangeInputs}
            placeholder="가격"
            name="price"
          />
        </div>

        <button onClick={onClickSubmit}>등록하기</button>
      </S.Wrapper>
    </>
  );
};

export default DashBoardItemPresenter;
