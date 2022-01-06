import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Head from "next/head";
import { Button } from "antd";
import { useAuth } from "../../../../pages/_app";
import { useState } from "react";

declare const window: Window &
  typeof globalThis & {
    IMP: any;
  };

export default function Mypoint() {
  const router = useRouter();
  const currentUser: any = useAuth();
  //   const { data } = useQuery(FETCH_USER_LOGGEDIN);

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
          // 결제 성공 시 로직,
          console.log(rsp);

          // createPointTransactionOfLoading 뮤테이션 실행하기!! impUid 인자로 넘기기!! imp92591067
          // 결제날짜, 결제된 시간, 취소된 시간, newDate() 아니면 백엔드에서 newDate 날짜를 만들것인징.. 백엔드가 맞댕.. 프론트에서getmonth 이런건됨
          try {
            const result = await {
              variables: {
                impUid: rsp.imp_uid,
                mypoint: "",
              },
            };
            console.log(result);
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

      <div>
        나의 포인트 : {currentUser?.mypoint}원
        <button onClick={onClickPayment}>충전하기</button>
      </div>
    </>
  );
}
