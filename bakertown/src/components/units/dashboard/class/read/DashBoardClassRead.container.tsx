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
import { useRouter } from "next/router";
// 선우의 만들어진 api키들이 app.tsx에 있는데 app에서 한번 가져오고 그걸 또 가져온거다.

const DashBoardClassReadContainer = () => {
  const [docs, setDocs] = useState([]);
  const currentUser: any = useAuth();
  const router = useRouter();

  const dashBoardClassReadContents = async () => {
    if (!currentUser) return;
    const product = query(
      collection(getFirestore(firebaseApp), "class"),
      // where("patissierId", "!=", "")
      // where("createdAt", "!=", "")
      orderBy("createdAt", "desc"),
      where("patissierId", "==", currentUser?.uid)
    );

    const data = await getDocs(product);
    // data로 만들기
    const docs: any = data.docs.map((el) => {
      const data = el.data();
      data.id = el.id;
      return data;
    });
    console.log(docs);
    setDocs(docs);
    // console.log("날짜나 불러볼라고", docs?.[0].createdAt);
  };

  useEffect(() => {
    dashBoardClassReadContents();
  });

  const update = (el: any) => () => {
    router.push(`/dashboard/class/edit/${el.id}`);
  };

  // 클래스 삭제
  const onClickDelete = (el: any) => async () => {
    await deleteDoc(
      doc(
        // db
        getFirestore(firebaseApp),
        // 컬렉션
        "class",
        // 문서
        `${el.id}`
      )
    );
    location.reload();
  };

  const onClickClassDetail = (el: any) => () => {
    router.push(`/class/detail/${el.id}`);
  };

  return (
    <>
      <DashBoardClassReadPresenter
        class={docs}
        update={update}
        onClickDelete={onClickDelete}
        classDetail={onClickClassDetail}
      />
    </>
  );
};

export default DashBoardClassReadContainer;
