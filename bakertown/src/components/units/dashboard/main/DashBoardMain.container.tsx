import { collection, getFirestore, where, getDocs } from "@firebase/firestore";
import { query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firebaseApp } from "../../../../../pages/_app";
import DashBoardMainPresenter from "./DashBoardMain.presenter";

const DashBoardMainContainer = () => {
  const [categoryArray, setCategoryArray] = useState([]);
  const [count, setCount] = useState(0);

  const macaronCategory = async () => {
    const myQuery: any = query(
      collection(getFirestore(firebaseApp), "class"),
      where("category", "==", "마카롱")
    );
    const result = await getDocs(myQuery);
    categoryArray.push(result.docs.map((el) => el.data()));
  };

  const bakingCategory = async () => {
    const myQuery: any = query(
      collection(getFirestore(firebaseApp), "class"),
      where("category", "==", "베이킹")
    );
    const result = await getDocs(myQuery);
    categoryArray.push(result.docs.map((el) => el.data()));
  };

  const cakeCategory = async () => {
    const myQuery: any = query(
      collection(getFirestore(firebaseApp), "class"),
      where("category", "==", "케이크")
    );
    const result = await getDocs(myQuery);
    categoryArray.push(result.docs.map((el) => el.data()));
  };

  const cookieCategory = async () => {
    const myQuery: any = query(
      collection(getFirestore(firebaseApp), "class"),
      where("category", "==", "쿠키")
    );
    const result = await getDocs(myQuery);
    categoryArray.push(result.docs.map((el) => el.data()));
  };

  const coffeeCategory = async () => {
    const myQuery: any = query(
      collection(getFirestore(firebaseApp), "class"),
      where("category", "==", "커피")
    );
    const result = await getDocs(myQuery);
    categoryArray.push(result.docs.map((el) => el.data()));
  };

  const chocolaCategory = async () => {
    //   setCount((prev) => prev + 1);
    //   return;
    // }
    const myQuery: any = query(
      collection(getFirestore(firebaseApp), "class"),
      where("category", "==", "쇼콜라")
    );
    const result = await getDocs(myQuery);
    categoryArray.push(result.docs.map((el) => el.data()));
  };

  const classCategory = async () => {
    const macaronQuery: any = query(
      collection(getFirestore(firebaseApp), "class"),
      where("category", "==", "마카롱")
    );
    const macaronResult = await getDocs(macaronQuery);
    categoryArray.push(macaronResult.docs.map((el) => el.data()));

    const bakingQuery: any = query(
      collection(getFirestore(firebaseApp), "class"),
      where("category", "==", "베이킹")
    );
    const bakingResult = await getDocs(bakingQuery);
    categoryArray.push(bakingResult.docs.map((el) => el.data()));

    const cakeQuery: any = query(
      collection(getFirestore(firebaseApp), "class"),
      where("category", "==", "케이크")
    );
    const cakeResult = await getDocs(cakeQuery);
    categoryArray.push(cakeResult.docs.map((el) => el.data()));

    const cookieQuery: any = query(
      collection(getFirestore(firebaseApp), "class"),
      where("category", "==", "쿠키")
    );
    const cookieResult = await getDocs(cookieQuery);
    categoryArray.push(cookieResult.docs.map((el) => el.data()));

    const coffeeQuery: any = query(
      collection(getFirestore(firebaseApp), "class"),
      where("category", "==", "커피")
    );
    const coffeeResult = await getDocs(coffeeQuery);
    categoryArray.push(coffeeResult.docs.map((el) => el.data()));

    const chocolaQuery: any = query(
      collection(getFirestore(firebaseApp), "class"),
      where("category", "==", "쇼콜라")
    );
    const chocolaResult = await getDocs(chocolaQuery);
    categoryArray.push(chocolaResult.docs.map((el) => el.data()));
  };

  useEffect(() => {
    // macaronCategory();
    // bakingCategory();
    // cakeCategory();
    // cookieCategory();
    // coffeeCategory();
    // chocolaCategory();
    classCategory();
    console.log(categoryArray);
  }, []);

  return <DashBoardMainPresenter categoryArray={categoryArray} />;
};

export default DashBoardMainContainer;
