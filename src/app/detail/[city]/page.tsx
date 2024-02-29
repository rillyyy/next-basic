// "use client";
// @ 은 /src를 가르키는 절대 경로!
import style from "@/app/styles/detail.module.css"
import HomeButton from "@/app/components/HomeButton";
import { useRouter } from "next/navigation";
// import Link from "next/link";
import React from "react";

// function ( parameter: 데이터 종류)
// 1. const page = (받은값:Props) => {

// function ( {속성:값}: 데이터 종류)
// 2. const page = ({속성:값}:Props) => {

// 약속된 속성명 params
// 3. const page = ({params:params}:Props) => {

// 축약형 적용
// 4. const page = ({params}:Props) => {
// type Props = {
//   // 키명 : {속성:값종류};
//   // params : {속성:값종류};
//   // params : {city:값종류};
//   // params: { city: string };
// };

type Props = {
  params: {
    city: string;
  };
  searchParams: {
    cityName: string;
  };
};

// 동적 MetaData
export function generateMetadata({ params, searchParams }: Props) {
  return {
    title: `새로운 타이틀 - ${searchParams.cityName}`,
    description: `${searchParams.cityName} : 연습하고 있습니다. ^^`,
  };
}

const Detail = ({ params, searchParams }: Props) => {
  // const cityName = params.city === "daegu" ? "대구" : params.city;
  return (
    <>
      <div className={style.detailTitle}>상세내용 : {searchParams.cityName}</div>
      <HomeButton />
    </>
  );
};

export default Detail;