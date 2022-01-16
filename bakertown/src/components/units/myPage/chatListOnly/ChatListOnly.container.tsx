import ChatListPresenter from "./ChatListOnly.presenter";
import { useState, useEffect, useRef } from "react";
import { firebaseApp, useAuth } from "../../../../../pages/_app";
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  limit,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import { useRouter } from "next/router";

// 해당 리스트 페이지는 chatRoomOnly 페이지에 종속되는 페이지이며, 모바일 전용은 chatListMobile 페이지입니다.
const ChatListContainer = () => {
  const router = useRouter();
  const [messages, setMessages] = useState([]);

  const currentUser = useAuth();

  async function loadMessages() {
    const recentMessagesQuery = query(
      collection(getFirestore(firebaseApp), "chatRoomDB"),
      where("participants", "array-contains", currentUser?.uid),
      // orderBy("createdAt", "desc"),
      limit(100)
    );
    const result = await getDocs(recentMessagesQuery);
    console.log(
      "알아보기 쉽게 써볼게요.",
      result.docs.map((el) => el.data())
    );
    onSnapshot(recentMessagesQuery, function (snapshot) {
      // @ts-ignore
      setMessages(snapshot.docs.map((el) => el.data()));
    });
  }

  const msgRef = useRef<HTMLDivElement>();

  function scrollToBottom() {
    if (msgRef.current) {
      msgRef.current.scrollTop = msgRef.current.scrollHeight;
    }
  }

  const onClickToChatRoom = (el: any) => () => {
    router.push(`/myPage/chatRoom/${el.participants[0]}/${el.participants[1]}`);
  };

  useEffect(() => {
    if (!currentUser) return;
    loadMessages();
  }, [currentUser]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <ChatListPresenter
      onClickToChatRoom={onClickToChatRoom}
      messages={messages}
      msgRef={msgRef}
    />
  );
};

export default ChatListContainer;
