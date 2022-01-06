import { ChangeEvent, useContext, useState } from "react";
import { getDate, getOnlyDate } from "../../../../../commons/libraries/getDate";
import { plusMyung } from "../../../../../commons/libraries/stringConcatenate";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import DashBoardMainClassWritePresenter from "./DashBoardClassWrite.presenter";
import { firebaseApp, useAuth } from "../../../../../../pages/_app";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "./DashBoardClassWrite.queries";

const DashBoardMainClassWriteContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState("");
  const [members, setMembers] = useState("");
  const [myInputs, setMyInputs] = useState({
    className: "",
    category: "",
    remarks: "",
    contents: "",
    price: "",
    address: "",
    createdAt: "",
    patissier: "",
    patissierId: "",
    heart: 0,
    images: [],
    applyClass: {},
  });
  const [classSchedule, setClassSchedule] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [address, setAddress] = useState("");

  const currentUser: any = useAuth();

  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  const toggleScheduleModal = () => {
    setIsVisible((prev) => !prev);
  };
  const handleComplete = (data: any) => {
    console.log(data);
    setAddress(data.address);
    myInputs.address = data.address;
    setIsOpen((prev) => !prev);
  };

  // 날짜 설정
  function onChangeDate(dateString: string) {
    setDate(getOnlyDate(dateString));
  }

  // 최대인원 수 설정
  const onChangeMembers = (event: ChangeEvent<HTMLInputElement>) => {
    setMembers(plusMyung(event.target.value));
  };

  // 클래스 등록
  const onClickSubmit = async () => {
    // 등록 날짜 및 시간 설정
    myInputs.applyClass.classArray = classSchedule;

    // myInputs.applyClass.push("aaa");
    myInputs.patissierId = currentUser?.uid;
    myInputs.createdAt = getDate(new Date());
    myInputs.category = "마카롱";
    console.log(myInputs);
    const dashboardclasswrite = collection(
      // db
      getFirestore(firebaseApp),
      // 컬렉션
      "class"
    );
    // 추가 내용
    await addDoc(dashboardclasswrite, {
      ...myInputs,
    });
  };

  // 인풋 값 변경 시 state에 저장
  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setMyInputs({
      className: myInputs.className,
      contents: myInputs.contents,
      remarks: myInputs.remarks,
      category: myInputs.category,
      address: myInputs.address,
      price: myInputs.price,
      applyClass: myInputs.applyClass,
      images: myInputs.images,
      patissier: myInputs.patissier,
      patissierId: myInputs.patissierId,
      createdAt: "",
      [event.target.name]: event.target.value,
    });
  };

  const onChangeImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    try {
      const result = await uploadFile({ variables: { file } });
      console.log("이미지", result);
      myInputs.images.push(result.data.uploadFile.url);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <DashBoardMainClassWritePresenter
      isOpen={isOpen}
      onToggleModal={onToggleModal}
      handleComplete={handleComplete}
      onChangeDate={onChangeDate}
      onChangeMembers={onChangeMembers}
      onClickSubmit={onClickSubmit}
      onChangeInputs={onChangeInputs}
      onChangeImage={onChangeImage}
      classSchedule={classSchedule}
      toggleScheduleModal={toggleScheduleModal}
      isVisible={isVisible}
      address={address}
    />
  );
};

export default DashBoardMainClassWriteContainer;
