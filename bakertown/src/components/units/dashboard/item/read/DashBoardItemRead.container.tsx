import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "@firebase/firestore";
import { deleteDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firebaseApp } from "../../../../../../pages/_app";
import DashBoardItemReadPresenter from "./DashBoardItemRead.presenter";

const DashBoardItemReadContainer = () => {
  const router = useRouter();
  const [recent, setRecent] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(async () => {
    setCategoryName(String(router.query.categoryName));
    console.log(categoryName);
    const recent = query(
      collection(getFirestore(firebaseApp), "item")
      // where("category", "==", categoryName)
    );
    let result = await getDocs(recent);
    let docs: any = result.docs.map((el) => {
      const data = el.data();
      data.id = el.id;
      return data;
    });
    console.log(docs);
    setRecent(docs);
  }, []);

  const update = (el: any) => () => {
    router.push(`/dashboard/item/edit/${el.id}`);
  };

  // 클래스 삭제
  const onClickDelete = (el: any) => async () => {
    await deleteDoc(
      doc(
        // db
        getFirestore(firebaseApp),
        // 컬렉션
        "item",
        // 문서
        `${el.id}`
      )
    );
    location.reload();
  };
  return (
    <>
      <DashBoardItemReadPresenter
        recent={recent}
        update={update}
        onClickDelete={onClickDelete}
        delete={undefined}
      />
    </>
  );
};
export default DashBoardItemReadContainer;
