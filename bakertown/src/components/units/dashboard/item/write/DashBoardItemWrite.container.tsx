import DashBoardItemPresenter from "./DashBoardItemWrite.presenter";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { ChangeEvent, useState } from "react";
import { firebaseApp } from "../../../../../../pages/_app";
import { getDate, getOnlyDate } from "../../../../../commons/libraries/getDate";

export const DashBoardItemContainer = () => {
  const [myInputs, setMyInputs] = useState({
    itemName: "",
    contents: "",
    price: "",
    createdAt: "",
    category: "",
    shippingTime: "",
    heart: 0,
    review: [],
    images: [],
  });

  // 아이템 등록
  const onClickSubmit = async () => {
    myInputs.createdAt = getOnlyDate(new Date());
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
      images: myInputs.images,
      createdAt: myInputs.createdAt,
      category: myInputs.category,
      heart: myInputs.heart,
      review: myInputs.review,
      shippingTime: myInputs.shippingTime,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <DashBoardItemPresenter
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
    />
  );
};
export default DashBoardItemContainer;
