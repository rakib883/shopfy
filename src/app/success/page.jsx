"use client";

import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/slice";
import Title from "../../components/ui/Title";
import Link from "next/link";


const Page = () => {
 const dispatch = useDispatch()
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")

  if(!sessionId){
    redirect("/")
  }

  useEffect(()=>{
    dispatch(resetCart())
  },[sessionId])

  return (
    <div>
        <div className="item max-w-md mx-auto flex flex-col gap-2 my-8">
          <div className="title">
            <Title title="Pament succesfully"/>
          </div>
          <p className=" text-center">We are delivery your product 3 days <span className=" font-bold cursor-pointer text-green-800 hover:underline">You have any question</span></p>
          <div className="content flex gap-4 my-2">
            <Link href="/" className="home bg-[#0989ff] hover:bg-indigo-700 duration-300 text-white py-2  px-4 rounded-sm w-full text-center" >
               <button className="  ">Go Home</button>
            </Link>
            <Link href="/" className="home bg-[#0989ff] hover:bg-indigo-700 duration-300 text-white py-2  px-4 rounded-sm w-full text-center" >
               <button className="  ">Go Home</button>
            </Link>
          </div>
        </div>
    </div>
  );
}

export default Page;
