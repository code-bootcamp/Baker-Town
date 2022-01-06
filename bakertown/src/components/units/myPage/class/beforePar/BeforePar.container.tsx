import { doc, getDoc, getFirestore } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { firebaseApp, useAuth } from "../../../../../../pages/_app";
import BeforeParPresenter from "./BeforePar.presenter";

const BeforeParContainer = () => {
  const currentUser = useAuth();
  const [myUser, setMyUser] = useState([]);
  useEffect(async () => {
    const userQuery = doc(
      getFirestore(firebaseApp),
      "users",
      currentUser?.email
    );
    const userResult = await getDoc(userQuery);
    setMyUser(userResult.data());
  }, []);

  return <BeforeParPresenter userResult={myUser} />;
};

export default BeforeParContainer;
