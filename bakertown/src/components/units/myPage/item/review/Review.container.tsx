import ReviewPresenter from "./Review.presenter";
import { doc, getDoc, getFirestore } from "@firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firebaseApp, useAuth } from "../../../../../../pages/_app";

const ReviewContainer = () => {
  const router = useRouter();
  const currentUser: any = useAuth();
  const [myUser, setMyUser] = useState({
    name: "로딩중입니다",
    itemReview: [],
  });

  const reviewContents = async () => {
    if (myUser?.name === "로딩중입니다") {
      if (!currentUser) return;
      const userQuery = doc(
        getFirestore(firebaseApp),
        "users",
        currentUser?.email
      );
      const userResult: any = await getDoc(userQuery);
      setMyUser(userResult.data());
      console.log("aaa", userResult.data());
    }
  };

  useEffect(() => {
    reviewContents();
  });

  const onClickItemDetail = (el: any) => () => {
    router.push(`/store/detail/${el.itemRouter}`);
  };

  return <ReviewPresenter userResult={myUser} itemDetail={onClickItemDetail} />;
};

export default ReviewContainer;
