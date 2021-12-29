import {
  collection,
  getFirestore,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useState } from "react";
import { firebaseApp } from "../_app";
// 선우의 만들어진 api키들이 app.tsx에 있는데 app에서 한번 가져오고 그걸 또 가져온거다.
import { TimePicker } from "antd";
import { DatePicker } from "antd";
import { getDate, getOnlyDate } from "../../src/commons/libraries/getDate";
import { plusMyung } from "../../src/commons/libraries/stringConcatenate";

export default function FirebaseTestPage() {
  const [patissier, setPatissier] = useState("");
  const [id, setId] = useState("");
  const [myInputs, setMyInputs] = useState({
    className: "",
    contents: "",
    category: "",
    address: "",
    patissier: "",
    price: "",
    jjim: 0,
    createdAt: "",
    reservation: {},
  });
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [members, setMembers] = useState("");
  const [reservationMemeber, setReservationMemeber] = useState("");
  const [reservationObject, setReservationObject] = useState({});

  // 날짜 설정
  function onChangeDate(dateString) {
    setDate(getOnlyDate(dateString));
  }

  // 시작 시간 설정
  function onChangeStartTime(time, timeString) {
    setStart(timeString);
    console.log(timeString);
  }

  // 끝 시간 설정
  function onChangeEndTime(time, timeString) {
    setEnd(timeString);
    console.log(timeString);
  }

  // 인원 수 설정
  const onChangeMembers = (event) => {
    setMembers(plusMyung(event.target.value));
  };

  // 클래스 등록
  const onClickSubmit = async () => {
    // 예약 날짜 및 시간 설정
    myInputs.reservation = {
      [date]: {
        first: {
          start: start,
          end: end,
          [members]: {
            "1": "나리",
            "2": "선우",
            "3": "",
          },
        },
      },
    };
    myInputs.createdAt = getDate(new Date());
    console.log(myInputs);
    const bakeryClass = collection(
      // db
      getFirestore(firebaseApp),
      // 컬렉션
      "class"
    );
    // 추가 내용
    await addDoc(bakeryClass, {
      ...myInputs,
    });
  };

  // 클래스 수정
  const onClickUpdate = async () => {
    const bakeryClass = doc(
      // db
      getFirestore(firebaseApp),
      // 컬렉션
      "class",
      // 문서
      "PIiNh4vAP3OAR0BeViRz"
    );
    // 수정 내용
    const query = await updateDoc(bakeryClass, {
      price: 500000000,
      category: "과자",
    });
  };

  // 클래스 삭제
  const onClickDelete = async () => {
    await deleteDoc(
      doc(
        // db
        getFirestore(firebaseApp),
        // 컬렉션
        "class",
        // 문서
        "CjaaWKIqLVFvqRtdtdCT"
      )
    );
  };
  // 모두 불러오기
  const onClickFetch = async () => {
    const product = collection(
      // db
      getFirestore(firebaseApp),
      // 컬렉션
      "class"
    );
    // 불러오기
    const result = await getDocs(product);
    // data로 만들기
    const docs = result.docs.map((el) => el.data());
    console.log(docs);
    // 불러온 것 중에서 5번째 것의 파티셰이름을 스테이트에 넣기
    // setPatissier(docs[5].patissier);
    // setId(result.docs?.[0].id);
  };

  // 하나만 불러오기
  const onClickFetch2 = async () => {
    const product = doc(
      getFirestore(firebaseApp),
      "class",
      "EcR4cBHRD7xOZrsrmKjR"
    );
    const result = await getDoc(product);
    const aaa = result.data();
    setReservationObject(aaa.reservation);
    console.log(aaa);
    console.log(reservationObject);
  };
  // 미완성
  const onClickDeleteOne = async () => {
    await deleteDoc(doc(getFirestore(firebaseApp), "class"));
  };
  // 인풋 값 변경 시 state에 저장
  const onChangeInputs = (event) => {
    setMyInputs({
      className: myInputs.className,
      contents: myInputs.contents,
      category: myInputs.category,
      address: myInputs.address,
      patissier: myInputs.patissier,
      price: myInputs.price,
      jjim: myInputs.jjim,
      createdAt: "",
      reservation: myInputs.reservation,
      [event.target.name]: event.target.value,
    });
  };
  // 찜하기 기능
  const onClickJjim = async () => {
    // 이렇게는 안됨 무조건 1로 만들고 시작임
    // 따라서 먼저 불러온 다음에 거기서 jjim이 뭔지 보고
    // 그에 따라서 조건을 걸어야함
    // 디폴트는 0, 찜이 0이면 1로, 1이면 0으로
    if (myInputs.jjim === 0) {
      myInputs.jjim = 1;
    } else if (myInputs.jjim === 1) myInputs.jjim = 0;
    // 찜할 클래스
    const bakeryClass = doc(
      // db
      getFirestore(firebaseApp),
      // 컬렉션
      "class",
      // 문서
      "PIiNh4vAP3OAR0BeViRz"
    );
    // 찜하기
    const query = await updateDoc(bakeryClass, {
      jjim: Number(myInputs.jjim),
    });
  };

  // 예약한 사람의 이름
  const onChangeReservationName = (event) => {
    setReservationMemeber(event.target.value);
  };

  // 예약하기
  const onClickReservation = async () => {
    const bakeryClass = doc(
      // db
      getFirestore(firebaseApp),
      // 컬렉션
      "class",
      // 문서
      "stKIrZmxUusfwY5lnmvc"
    );
    // 수정 내용
    reservationObject["01월 01일"].first["4명"]["4"] = reservationMemeber;
    console.log(reservationObject);
    const query = await updateDoc(bakeryClass, {
      reservation: {
        ...reservationObject,
      },
    });
  };

  return (
    <>
      <div>파이어베이스 연습</div>
      <input
        type="text"
        onChange={onChangeInputs}
        placeholder="제목"
        name="className"
      />
      <input
        type="text"
        onChange={onChangeInputs}
        placeholder="카테고리"
        name="category"
      />
      <input
        type="text"
        onChange={onChangeInputs}
        placeholder="내용"
        name="contents"
      />
      <input
        type="text"
        onChange={onChangeInputs}
        placeholder="파티셰"
        name="patissier"
      />
      <input
        type="text"
        onChange={onChangeInputs}
        placeholder="가격"
        name="price"
      />
      <input
        type="text"
        onChange={onChangeInputs}
        placeholder="주소"
        name="address"
      />
      {/* 날짜 및 시간 받아내기 */}
      <DatePicker onChange={onChangeDate} />
      <TimePicker use12Hours format="h:mm a" onChange={onChangeStartTime} />
      <TimePicker use12Hours format="h:mm a" onChange={onChangeEndTime} />
      {/* 인원 받기 */}
      <input type="number" onChange={onChangeMembers} />
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickUpdate}>수정하기</button>
      <button onClick={onClickDelete}>삭제하기</button>
      <button onClick={onClickFetch}>불러오기</button>
      <button onClick={onClickFetch2}>불러오기2</button>
      <button onClick={onClickJjim}>클래스 찜</button>
      <div>파티셰 이름: {patissier}</div>
      <button onClick={onClickDeleteOne}>해당 클래스 삭제하기</button>
      <input
        type="text"
        placeholder="예약하시는 분의 이름을 적어주세요"
        onChange={onChangeReservationName}
      />
      <button onClick={onClickReservation}>예약하기</button>
    </>
  );
}
