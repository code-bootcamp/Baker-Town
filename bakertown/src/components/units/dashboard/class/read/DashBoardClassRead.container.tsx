import DashBoardClassReadPresenter from "./DashBoardClassRead.presenter";
import {
  collection,
  getFirestore,
  query,
  getDocs,
  doc,
  deleteDoc,
  orderBy,
  startAfter,
  limit,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { firebaseApp, useAuth } from "../../../../../../pages/_app";
// 선우의 만들어진 api키들이 app.tsx에 있는데 app에서 한번 가져오고 그걸 또 가져온거다.

const DashBoardClassReadContainer = () => {
  const [docs, setDocs] = useState([]);
  const currentUser: any = useAuth();

  useEffect(async () => {

    const product = query(
      collection(getFirestore(firebaseApp), "class"),
      where("patissierId", "!=", "")
      // where("patissierId", "==", currentUser?.uid)
    );

    const data = await getDocs(product);
    // data로 만들기
    const docs = data.docs.map((el) => {
      const data = el.data();
      data.id = el.id;
      return data;
    });
    console.log(docs);
    setDocs(docs);
    // console.log("날짜나 불러볼라고", docs?.[0].createdAt);
  }, []);

  const onClickDelete = (el) => async () => {
    await deleteDoc(doc(getFirestore(firebaseApp), "class", el.id));
  };

  return (
    <>
      <DashBoardClassReadPresenter
        classes={docs}
        onClickDelete={onClickDelete}
      />
      ;
    </>
  );
};

export default DashBoardClassReadContainer;
