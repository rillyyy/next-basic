import Link from "next/link";
import React from "react";
// 아.. 어렵다.
type Props = {
  params: {
    city: string;
  };
};

const page = ({ params }: Props) => {
  const cityName = params.city === "daegu" ? "대구" : params.city;
  return (
    <>
      <div>상세내용 : {cityName}</div>
      <Link href="/">이전페이지</Link>
    </>
  );
};

export default page;