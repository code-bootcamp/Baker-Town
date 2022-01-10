import StoreDetailPresenter from "../detail/StoreDetail.presenter";
import { useEffect, useState } from "react";
import { getFirestore, getDoc, doc, updateDoc } from "firebase/firestore";
import { firebaseApp, useAuth } from "../../../../../pages/_app";
import { useRouter } from "next/router";
import { getOnlyDate } from "../../../../commons/libraries/getDate";

const StoreDetailContainer = () => {
  const router = useRouter();

  const currentUser = useAuth();
  const [myStore, setMyStore] = useState({
    itemName: "로딩중입니다",
  });

  useEffect(async () => {
    if (myStore?.itemName === "로딩중입니다") {
      const product = doc(
        getFirestore(firebaseApp),
        "item",
        String(router.query.storeId)
      );
      const result = await getDoc(product);
      const itemData = result.data();
      console.log(router.query.storeId);
      console.log("아이템 정보", itemData);
      setMyStore(itemData);
    }
  });

  const onClickPurchase = async () => {
    // 현재 페이지 정보 불러오기
    const bakeryClass = doc(
      getFirestore(firebaseApp),
      "class",
      String(router.query.classId)
    );
    //
    // 내 정보 불러오기

    console.log(currentUser);
    const userQuery = doc(
      getFirestore(firebaseApp),
      "users",
      currentUser?.email
    );
    const userResult = await getDoc(userQuery);

    // 내가 구매한 아이템
    const myBoughtItem = userResult.data().boughtItem;

    // 구매하기 정보
    const buyInfo = {
      itemRouter: router.query.storeId,
      itemName: myStore?.itemName,
      price: Number(myStore?.price),
      category: myStore?.category,
      createdAt: getOnlyDate(new Date()),
    };
    // 구매한 정보 내 정보에 넣기
    myBoughtItem.push(buyInfo);
    console.log("aa", myBoughtItem);
    await updateDoc(userQuery, {
      boughtItem: myBoughtItem,
    });
  };

  const onClickHeart = async () => {
    // 현재 페이지 정보 불러오기
    const bakeryItem = doc(
      getFirestore(firebaseApp),
      "item",
      String(router.query.storeId)
    );
    const itemResult = await getDoc(bakeryItem);

    // 내 정보 불러오기
    const userQuery = doc(
      getFirestore(firebaseApp),
      "users",
      currentUser?.email
    );
    const userResult = await getDoc(userQuery);

    console.log(userResult.data());

    // 내 찜 목록
    const userHeart = userResult.data().itemHeart;

    // 내 찜 목록에 현재 아이템 넣기
    const heartInfo = {
      itemRouter: router.query.storeId,
      itemName: myStore?.itemName,
      price: Number(myStore?.price),
      cateogry: myStore?.category,
    };
    console.log(heartInfo);

    userHeart?.push(heartInfo);
    await updateDoc(userQuery, {
      itemHeart: userHeart,
    });

    // 현재 페이지 찜 정보
    const itemHeart = itemResult?.data().heart + 1;
    console.log(itemHeart);
    await updateDoc(bakeryItem, {
      heart: itemHeart,
    });
    alert("아이템을 찜 목록에 담았습니다!");
  };

  return (
    <StoreDetailPresenter
      myStore={myStore}
      purchase={onClickPurchase}
      heart={onClickHeart}
    />
  );
};
export default StoreDetailContainer;
