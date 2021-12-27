import {
  collection,
  getFirestore,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useState } from "react";
import { firebaseApp } from "../_app";

export default function FirebaseTestPage() {
  const [patissier, setPatissier] = useState("");
  const [id, setId] = useState("");

  const onClickSubmit = async () => {
    const bakeryClass = collection(getFirestore(firebaseApp), "class");
    await addDoc(bakeryClass, {
      patissier: "강남제오베이커리",
      className: "크리스마스 선물로 마카롱을 만들어 보아요!!",
      price: 36000,
      contents:
        "이제 크리스마스가 다가오고 있어요 여러분. 크리스마스를 맞아 저희 강남제오베이커리에서는 마카롱 클래스를 개설했습니다! 연인을 위해서, 또는 연인과 함께 마카롱을 만들어보아요~~",
      address: "서울 강남구 강남제오베이커리",
      category: "마카롱",
      reservation: {
        "12/12": ["1000~1200", "1400~1600"],
        "12/13": ["1400~1600"],
      },
    });
  };

  const onClickUpdate = async () => {
    // await collection(getFirestore(firebaseApp), "class")
    //   .doc("mfG8H7zZQc47bGHeGkPr")
    //   .set({
    //     price: 40000,
    //   });
    // const doc = await collection(getFirestore(firebaseApp), "class").doc(
    //   "mfG8H7zZQc47bGHeGkPr"
    // );

    const bakeryClass = doc(
      getFirestore(firebaseApp),
      "class",
      "CjaaWKIqLVFvqRtdtdCT"
    );

    const query = await updateDoc(bakeryClass, {
      price: 500000,
      category: "과자",
    });
  };

  const onClickDelete = async () => {
    await deleteDoc(
      doc(getFirestore(firebaseApp), "class", "CjaaWKIqLVFvqRtdtdCT")
    );
  };

  const onClickFetch = async () => {
    const product = collection(getFirestore(firebaseApp), "class");
    const result = await getDocs(product);
    const docs = result.docs.map((el) => el.data());
    console.log(result);
    console.log(docs);
    setPatissier(docs[0].patissier);
    // setId(docs);
  };

  const onClickFetch2 = async () => {
    const product = doc(
      getFirestore(firebaseApp),
      "class",
      "mfG8H7zZQc47bGHeGkPr"
    );
    const result = await getDoc(product);
    console.log(result);
  };

  const onClickDeleteOne = async () => {
    await deleteDoc(doc(getFirestore(firebaseApp), "class"));
  };

  return (
    <>
      <div>파이어베이스 연습</div>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickUpdate}>수정하기</button>
      <button onClick={onClickDelete}>삭제하기</button>
      <button onClick={onClickFetch}>불러오기</button>
      <button onClick={onClickFetch2}>불러오기2</button>
      <div>{patissier}</div>
      <button onClick={onClickDeleteOne}>해당 클래스 삭제하기</button>
    </>
  );
}
