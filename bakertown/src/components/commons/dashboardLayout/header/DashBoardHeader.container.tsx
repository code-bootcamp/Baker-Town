import { getFirestore, doc, getDoc } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { firebaseApp, useAuth } from "../../../../../pages/_app";
import DashBoardHeaderPresenter from "./DashBoardHeader.presenter";

const DashBoardHeaderContainer = () => {
  const currentUser: any = useAuth();

  const [myUser, setMyUser] = useState({
    name: "로딩중입니다",
  });
  const [count, setCount] = useState(0);

  const userQuery = async () => {
    if (!currentUser) {
      setCount((prev) => prev + 1);
      return;
    }
    const query = doc(
      getFirestore(firebaseApp),
      "users",
      String(currentUser?.email)
    );
    const result: any = await getDoc(query);
    setMyUser(result.data());
    console.log(result.data());
  };

  useEffect(() => {
    userQuery();
  }, [count]);

  return <DashBoardHeaderPresenter myUser={myUser} />;
};

export default DashBoardHeaderContainer;
