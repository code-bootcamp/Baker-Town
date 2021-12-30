import StoreDetailPresenter from "../detail/StoreDetail.presenter";
import { useEffect, useState } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { firebaseApp } from "../../../../../pages/_app";
import { useRouter } from "next/router";

const StoreDetailContainer = () => {
  const router = useRouter();

  const [myStore, setMyStore] = useState({
    address: "",
    category: "",
    className: "",
    contents: "",
    patissier: "",
    price: "",
  });

  useEffect(async () => {
    const product = doc(
      getFirestore(firebaseApp),
      "store",
      String(router.query.storeId)
    );
    const result = await getDoc(product);
    const aaa = result.data();
    console.log(aaa);
    setMyStore({
      address: aaa?.address,
      category: aaa?.category,
      className: aaa?.className,
      contents: aaa?.contents,
      patissier: aaa?.patissier,
      price: aaa?.price,
    });
  }, []);

  return <StoreDetailPresenter myStore={myStore} />;
};
export default StoreDetailContainer;
