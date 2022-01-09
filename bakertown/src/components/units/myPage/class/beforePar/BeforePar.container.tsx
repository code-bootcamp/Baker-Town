import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  query,
  startAfter,
  updateDoc,
} from "@firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firebaseApp, useAuth } from "../../../../../../pages/_app";
import BeforeParPresenter from "./BeforePar.presenter";
import { useBottomScrollListener } from "react-bottom-scroll-listener";

const BeforeParContainer = () => {
  const router = useRouter();
  const currentUser = useAuth();
  const [myUser, setMyUser] = useState([]);

  useEffect(async () => {
    if (myUser?.name === "로딩중입니다") {
      if (!currentUser) return;
      // const userQuery = doc(
      //   getFirestore(firebaseApp),
      //   "users",
      //   currentUser?.email
      // );
      // const userResult = await getDoc(userQuery);
      // setMyUser(userResult.data());

      //
      //
      //
      // 무한스크롤 해보기
    }
  });

  const getNextMyUser = () => {
    if (!currentUser) return;
    let lastVisible = undefined;
    let q;
    if (lastVisible === -1) {
      return;
    } else if (lastVisible) {
      q = query(
        collection(getFirestore(firebaseApp), "users", currentUser?.email),
        limit(2),
        startAfter(lastVisible)
      );
    } else {
      q = query(
        collection(getFirestore(firebaseApp), "users", currentUser?.email),
        limit(4)
      );
    }
    const aaa = getDocs(q);
    console.log(aaa.data());

    // getDocs(q).then((snapshot) => {
    //   setMyUser((myUser) => {
    //     const arr = [...myUser];
    //     snapshot.forEach((doc) => {
    //       arr.push(doc.data());
    //     });
    //     return arr;
    //   });
    //   if (snapshot.docs.length === 0) {
    //     lastVisible = -1;
    //   } else {
    //     lastVisible = snapshot.docs[snapshot.docs.length - 1];
    //   }
    // });
  };

  useBottomScrollListener(getNextMyUser);

  useEffect(() => {
    getNextMyUser();
    console.log("aaaaa", myUser);
  }, []);

  const onClickClassDetail = (el) => () => {
    console.log(el.classRouter);
    router.push(`/class/detail/${el.classRouter}`);
  };

  const onClickCancel = (el, index) => async () => {
    // 내 정보 불러오기
    const userQuery = doc(
      getFirestore(firebaseApp),
      "users",
      currentUser?.email
    );
    const userResult: any = await getDoc(userQuery);
    // // 나의 포인트 + class가격
    // const charge = userResult.data().mypoint + el.classPrice;
    // await updateDoc(userQuery, { mypoint: charge });
    // console.log(charge);

    // 클래스 불러오기
    const bakeryClass = doc(getFirestore(firebaseApp), "class", el.classRouter);
    const classResult = await getDoc(bakeryClass);

    // 예약 정보에서 내 이름 찾기
    const bbb = classResult.data().applyClass?.classArray;
    // ?.[el.reservationInde]?.class?.membersName;

    console.log(
      bbb?.[el.reservationInde]?.class?.membersName.splice(
        classResult
          .data()
          .applyClass?.classArray?.[
            el.reservationInde
          ]?.class?.membersName.indexOf(userResult.data().name),
        1
      )
    );
    console.log(bbb);

    await updateDoc(bakeryClass, {
      // applyClass?.classArray?.[el.reservationInde].class?.membersName = bbb
      applyClass: {
        ...bbb,
      },
    });
    // // 내 참여예정 클래스
    const myBeforeParClass = userResult.data().beforePar;
    // // 선택한 클래스 없애기
    myBeforeParClass.splice(index, 1);

    // // 없앤 beforePar 배열을 올리기
    await updateDoc(userQuery, {
      beforePar: myBeforeParClass,
    });
  };

  return (
    <BeforeParPresenter
      userResult={myUser}
      classDetail={onClickClassDetail}
      cancel={onClickCancel}
    />
  );
};

export default BeforeParContainer;
