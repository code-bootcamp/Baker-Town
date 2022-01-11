import { useState, useEffect, useRef } from "react";
import {
  firebaseApp,
  getFirebaseConfig,
  useAuth,
} from "../../../../../pages/_app";
import { initializeApp } from "firebase/app";
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
import ChatRoomPresenter from "./chatRoom.presenter";

// const firebaseAppConfig = getFirebaseConfig();
// initializeApp(firebaseAppConfig);

export default function ChatRoomContainer() {
  const router = useRouter();
  const currentUser = useAuth();

  const [messages, setMessages] = useState([]);
  const [myUser, setMyUser] = useState({
    name: "내 이름",
  });

  useEffect(async () => {
    if (myUser.name === "내 이름") {
      if (!currentUser) return;
      const userQuery = doc(
        getFirestore(firebaseApp),
        "users",
        currentUser?.email
      );
      const userResult = await getDoc(userQuery);
      setMyUser(userResult.data());
      console.log(userResult.data());
    }
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
    try {
      await addDoc(collection(getFirestore(), `chatDB`), {
        roomId: roomId,
        // productId: router.query.poshId,
        writer: name,
        writerId: currentUser?.uid,
        // seller: seller,
        text: inputRef.current.value,
        // profilePicUrl: picture,
        timestamp: serverTimestamp(),
        id: new Date().toString().slice(0, 25),
        key: uuidv4(),
      });
      await setDoc(doc(collection(getFirestore(), `chatRoomDB`), roomId), {
        roomId: roomId,
        // productId: router.query.poshId,
        writer: name,
        // seller: seller,
        text: inputRef.current.value,
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
      // myId={myId}
      //   onClickToProfile={onClickToProfile}
    />
  );
}
