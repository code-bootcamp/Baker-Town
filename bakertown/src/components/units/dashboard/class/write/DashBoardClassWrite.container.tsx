import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { getDate, getOnlyDate } from "../../../../../commons/libraries/getDate";
import { plusMyung } from "../../../../../commons/libraries/stringConcatenate";
import {
  collection,
  getFirestore,
  addDoc,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import DashBoardMainClassWritePresenter from "./DashBoardClassWrite.presenter";
import { firebaseApp, useAuth } from "../../../../../../pages/_app";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "./DashBoardClassWrite.queries";
import { useRouter } from "next/router";
import { IDashBoardMainClassWriteContainerProps } from "./DashBoardClassWrite.types";

const DashBoardMainClassWriteContainer = (
  props: IDashBoardMainClassWriteContainerProps
) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState("");
  const [members, setMembers] = useState("");
  const [myInputs, setMyInputs] = useState<SetStateAction<any>>({
    className: "",
    category: "",
    remarks: "",
    contents: "",
    price: "",
    address: "",
    district: "",
    createdAt: "",
    patissier: "",
    patissierId: "",
    detailAddress: "",
    introduce: "",
    heart: 0,
    review: [],
    images: [],
    applyClass: {
      classArray: [],
    },
  });
  const [classSchedule, setClassSchedule] = useState<SetStateAction<any>>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [address, setAddress] = useState("");
  const [myClass, setMyClass] = useState({
    address: "내 주소!",
  });

  const currentUser: any = useAuth();

  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  const toggleScheduleModal = () => {
    setIsVisible((prev) => !prev);
  };
  const handleComplete = (data: any) => {
    setIsOpen((prev) => !prev);
    setAddress(data.address);
    myInputs.address = data.address;
    myInputs.district = data.sigungu;
    console.log(data);
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
    const userQuery = doc(
      getFirestore(firebaseApp),
      "users",
      currentUser?.email
    );
    const userResult: any = await getDoc(userQuery);
    // 등록 날짜 및 시간 설정
    myInputs.applyClass.classArray = classSchedule;

    // myInputs.applyClass.push("aaa");
    myInputs.patissierId = currentUser?.uid;
    myInputs.patissier = userResult?.data().name;
    myInputs.createdAt = getDate(new Date());
    myInputs.introduce = userResult?.data().introduce;
    console.log(myInputs);

    if (
      !myInputs.className ||
      !myInputs.contents ||
      !myInputs.category ||
      !myInputs.remarks ||
      !myInputs.contents ||
      !myInputs.price ||
      !myInputs.address ||
      !myInputs.detailAddress ||
      !myInputs.applyClass
    ) {
      alert("값이 비어있습니다!! 모두 채워주세요.");
      return;
    }

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

    alert("클래스가 등록되었습니다.");
    router.push(`/dashboard/class/read`);
  };

  // 클래스 수정
  const onClickUpdate = async () => {
    const product = doc(
      getFirestore(firebaseApp),
      "class",
      String(router.query.classId)
    );

    const userQuery = doc(
      getFirestore(firebaseApp),
      "users",
      currentUser?.email
    );
    const userResult: any = await getDoc(userQuery);

    myInputs.patissierId = currentUser?.uid;
    myInputs.patissier = userResult?.data().name;
    myInputs.createdAt = getDate(new Date());
    myInputs.introduce = userResult?.data().introduce;

    if (!myInputs.className) myInputs.className = myClass?.className;

    console.log(myInputs);
    await setDoc(product, {
      ...myInputs,
    });
  };

  // 인풋 값 변경 시 state에 저장
  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setMyInputs({
      className: myInputs.className,
      contents: myInputs.contents,
      remarks: myInputs.remarks,
      address: myInputs.address,
      district: myInputs.district,
      category: myInputs.category,
      price: myInputs.price,
      applyClass: myInputs.applyClass,
      images: myInputs.images,
      patissier: myInputs.patissier,
      patissierId: myInputs.patissierId,
      heart: myInputs.heart,
      review: myInputs.review,
      detailAddress: myInputs.detailAddress,
      introduce: myInputs.introduce,
      createdAt: "",
      [event.target.name]: event.target.value,
    });
  };

  const onChangeCategory = (event: any) => {
    myInputs.category = event.target.value;
  };

  const onChangeImage2 = async (event: any) => {
    const file = event.target.files?.[0];
    // console.log(event.target.value);
    try {
      const result = await uploadFile({ variables: { file } });
      // console.log("이미지", result);
      myInputs.images.push(result.data.uploadFile.url);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const updateClass = async () => {
    if (props.isEdit) {
      if (myClass?.address === "내 주소!") {
        // if (!classData) return;
        const product = doc(
          getFirestore(firebaseApp),
          "class",
          String(router.query.classId)
        );
        const result = await getDoc(product);
        const classData: any = result.data();
        console.log("클래스 정보", classData);
        setMyClass(classData);
        setClassSchedule(classData?.applyClass.classArray);
      }
    }
  };

  // 수정하기 불러오기
  useEffect(() => {
    updateClass();
  });

  return (
    <DashBoardMainClassWritePresenter
      isOpen={isOpen}
      onToggleModal={onToggleModal}
      handleComplete={handleComplete}
      onChangeDate={onChangeDate}
      onChangeMembers={onChangeMembers}
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
      classSchedule={classSchedule}
      toggleScheduleModal={toggleScheduleModal}
      isVisible={isVisible}
      address={address}
      onChangeCategory={onChangeCategory}
      onChangeImage2={onChangeImage2}
      setClassSchedule={setClassSchedule}
      isEdit={props.isEdit}
      myClass={myClass}
      onClickUpdate={onClickUpdate}
    />
  );
};

export default DashBoardMainClassWriteContainer;
