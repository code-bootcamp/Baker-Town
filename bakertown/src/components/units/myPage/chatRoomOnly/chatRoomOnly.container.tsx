import { useState, useEffect, useRef } from "react";
import { firebaseApp, useAuth } from "../../../../../pages/_app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  setDoc,
  doc,
  where,
  getDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";

import { v4 as uuidv4 } from "uuid";
import ChatRoomPresenter from "./chatRoomOnly.presenter";

declare const window: typeof globalThis & {
  event: any;
};

export default function ChatRoomContainer() {
  const router = useRouter();
  const currentUser = useAuth();

  const [messages, setMessages] = useState([]);
  const [myUser, setMyUser] = useState({
    name: "내 이름",
  });
  const [patissierName, setPatissierName] = useState("");
  const [count, setCount] = useState(0);
  // const classId = router.query.classId;

  const chatRoomContents = async () => {
    if (myUser.name === "내 이름") {
      if (!currentUser) return;
      const userQuery = doc(
        getFirestore(firebaseApp),
        "users",
        currentUser?.email
      );
      const userResult: any = await getDoc(userQuery);
      setMyUser(userResult.data());
      console.log("ㅎㅎㅎㅎㅎ", userResult.data());
    }
  };

  const chatRoomContents2 = async () => {
    // if (classId === undefined) {
    //   setCount((prev) => prev + 1);
    //   return;
    // }
    // const patissierQuery = doc(
    //   getFirestore(firebaseApp),
    //   "class",
    //   "iTY8MJnCucODvo6VpFzeKmumOuI2"
    // );

    // const classResult = await getDoc(patissierQuery);

    // const resultData = classResult.data();
    // console.log("하잏아ㅣ,", resultData);

    // setPatissierName(resultData?.patissier);

    const patissierQuery = doc(
      getFirestore(firebaseApp),
      "class",
      String(router.query.cId)
    );
    const classResult = await getDoc(patissierQuery);
    const classData = classResult.data();
    setPatissierName(classData?.patissier);
  };

  useEffect(() => {
    chatRoomContents2();
    chatRoomContents();
  });

  const name = myUser.name;
  const myId = currentUser?.uid;
  // const picture = data?.fetchUserLoggedIn.picture;
  // const seller = item?.fetchUseditem.seller._id;
  // const productImg = item?.fetchUseditem.images?.[0];
  // const productName = item?.fetchUseditem.name;
  // const productPrice = item?.fetchUseditem.price;
  const roomId = `${router.query.classId}${router.query.myId}`;
  const inputRef = useRef<HTMLInputElement | any>(null);

  async function saveMessage() {
    console.log("파티셰", patissierName);
    try {
      await addDoc(collection(getFirestore(), `chatDB`), {
        roomId: roomId,
        // productId: router.query.poshId,
        writer: name,
        writerId: currentUser?.uid,
        patissier: patissierName,
        // seller: seller,
        text: inputRef.current.value,
        classId: router.query.cId,
        // profilePicUrl: picture,
        timestamp: serverTimestamp(),
        id: new Date().toString().slice(0, 25),
        key: uuidv4(),
      });
      await setDoc(doc(collection(getFirestore(), `chatRoomDB`), roomId), {
        roomId: roomId,
        // productId: router.query.poshId,
        writer: name,
        patissier: patissierName,
        // seller: seller,
        text: inputRef.current.value,
        classId: router.query.cId,
        // profilePicUrl: picture,
        timestamp: serverTimestamp(),
        id: new Date().toString().slice(0, 25),
        participants: [router.query.classId, router.query.myId],
      });
    } catch (error) {
      console.error("Error writing new message to Firebase Database", error);
    }
    inputRef.current.value = "";
  }

  function loadMessages() {
    const recentMessagesQuery = query(
      collection(getFirestore(), `chatDB`),
      where("roomId", "==", roomId),
      orderBy("timestamp", "asc")
    );
    onSnapshot(recentMessagesQuery, function (snapshot) {
      // @ts-ignore
      setMessages(snapshot.docs.map((el) => el.data()));
      console.log(snapshot.docs.map((el) => el.data()));
    });
  }

  const msgRef = useRef<HTMLDivElement>();

  function scrollToBottom() {
    if (msgRef.current) {
      msgRef.current.scrollTop = msgRef.current.scrollHeight;
    }
  }

  //   function onClickToProduct() {
  //     router.push(`/posh/products/${router.query.poshId}`);
  //   }

  //   function onClickToProfile() {
  //     router.push(`/posh/products/${router.query.poshId}/seller`);
  //   }

  useEffect(() => {
    loadMessages();
  }, [roomId, name]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const onKeyUpEnterKey = () => {
    if (window.event.keyCode === 13) {
      saveMessage();
    }
  };

  return (
    <ChatRoomPresenter
      // productImg={productImg}
      // productName={productName}
      // productPrice={productPrice}
      saveMessage={saveMessage}
      // onClickToProduct={onClickToProduct}
      msgRef={msgRef}
      messages={messages}
      inputRef={inputRef}
      name={name}
      myId={myId}
      enterKey={onKeyUpEnterKey}
      // myId={myId}
      //   onClickToProfile={onClickToProfile}
    />
  );
}
