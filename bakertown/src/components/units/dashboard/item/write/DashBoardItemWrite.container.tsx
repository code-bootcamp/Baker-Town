import DashBoardItemPresenter from "./DashBoardItemWrite.presenter";
import {
  collection,
  getFirestore,
  addDoc,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { ChangeEvent, useState, useEffect } from "react";
import { firebaseApp, useAuth } from "../../../../../../pages/_app";
import { getDate, getOnlyDate } from "../../../../../commons/libraries/getDate";
import { useRouter } from "next/router";
import { IDashBoardMainItemWriteContainerProps } from "./DashBoardItemWrite.types";
import { UPLOAD_FILE } from "./DashBoardItemWrite.queries";
import { useMutation } from "@apollo/client";

export const DashBoardItemContainer = (
  props: IDashBoardMainItemWriteContainerProps
) => {
  const router = useRouter();
  const currentUser: any = useAuth();
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [myInputs, setMyInputs] = useState({
    itemName: "",
    contents: "",
    price: 0,
    createdAt: "",
    category: "",
    shippingTime: "",
    patissier: "",
    patissierId: "",
    heart: 0,
    review: [],
    images: [],
  });

  const [myItem, setMyItem] = useState({
    itemName: "",
    contents: "",
    price: 0,
    shippingTime: "",
  });

  // 아이템 등록
  const onClickSubmit = async () => {
    const userQuery = doc(
      getFirestore(firebaseApp),
      "users",
      currentUser?.email
    );
    const userResult: any = await getDoc(userQuery);

    myInputs.createdAt = getOnlyDate(new Date());
    console.log(currentUser);
    myInputs.patissierId = currentUser?.uid;
    myInputs.patissier = userResult?.data().name;

    console.log("myInputs", myInputs);

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
    alert("상품이 등록되었습니다.");
  };

  // 아이템 수정
  const onClickUpdate = async () => {
    const item = doc(
      getFirestore(firebaseApp),
      "item",
      String(router.query.itemId)
    );

    const userQuery = doc(
      getFirestore(firebaseApp),
      "users",
      currentUser?.email
    );
    const userResult: any = await getDoc(userQuery);

    myInputs.patissierId = currentUser?.uid;
    myInputs.patissier = userResult?.data().name;
    myInputs.createdAt = getDate(new Date());

    if (!myInputs.itemName) myInputs.itemName = myItem?.itemName;
    if (!myInputs.contents) myInputs.contents = myItem?.contents;
    if (!myInputs.price) myInputs.price = myItem?.price;
    if (!myInputs.shippingTime) myInputs.shippingTime = myItem?.shippingTime;
    if (!myInputs.category) myInputs.shippingTime = myItem?.shippingTime;

    console.log(myInputs);
    await setDoc(item, {
      ...myInputs,
    });
    router.push(`/dashboard/item/read`);
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
      patissier: myInputs.patissier,
      patissierId: myInputs.patissierId,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeCategory = (event: any) => {
    myInputs.category = event.target.value;
  };

  const updateItem = async () => {
    if (props.isEdit) {
      const item = doc(
        getFirestore(firebaseApp),
        "item",
        String(router.query.itemId)
      );
      const result = await getDoc(item);
      const itemData: any = result.data();
      console.log("아이템 정보", itemData);
      setMyItem(itemData);
    }
  };

  const onChangeImage2 = async (event: any) => {
    const file = event.target.files?.[0];
    // console.log(event.target.value);
    try {
      const result = await uploadFile({ variables: { file } });
      // console.log("이미지", result);
      myInputs.images.push(result.data.uploadFile.url);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // 수정하기 불러오기
  useEffect(() => {
    updateItem();
  }, []);

  return (
    <DashBoardItemPresenter
      onChangeInputs={onChangeInputs}
      onChangeCategory={onChangeCategory}
      onClickSubmit={onClickSubmit}
      myItem={myItem}
      isEdit={props.isEdit}
      onClickUpdate={onClickUpdate}
      onChangeImage2={onChangeImage2}
    />
  );
};
export default DashBoardItemContainer;
