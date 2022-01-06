import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Head from "next/head";
import { firebaseApp, useAuth } from "../../../../pages/_app";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { MyPoint, ChargeButton } from "./MyPoint.styles";

declare const window: Window &
  typeof globalThis & {
    IMP: any;
  };

export default function Mypoint() {
  const router = useRouter();
  const currentUser: any = useAuth();
  //   const { data } = useQuery(FETCH_USER_LOGGEDIN);
  const [ppoint, setPpoint] = useState(0);

  useEffect(async () => {
    if (!currentUser) return;
    const userQuery = doc(
      getFirestore(firebaseApp),
      "users",
      currentUser?.email
    );
    const userResult = await getDoc(userQuery);
    setPpoint(userResult.data()?.mypoint);
  });

  function onClickPayment() {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "포인트충전",
        amount: 100,
        buyer_email: "cksal4897@gmail.com",
        buyer_name: "밍마켓",
        buyer_tel: "010-0000-0000",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "", //모바일 결제후 리다이렉트될 주소!
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
          try {
            //user정보 가져오기
            const userQuery = doc(
              getFirestore(firebaseApp),
              "users",
              currentUser?.email
            );
            const userResult: any = await getDoc(userQuery);
            //나의 포인트 + rsp.paid_amount

            const charge = userResult.data().mypoint + rsp.paid_amount;
            await updateDoc(userQuery, { mypoint: charge });
          } catch (error) {
            if (error instanceof Error) alert(error.message);
          }
        } else {
          // fail
        }
      }
    );
  }

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>

      <MyPoint>{ppoint}P</MyPoint>
      <ChargeButton onClick={onClickPayment}>포인트충전</ChargeButton>
    </>
  );
}
