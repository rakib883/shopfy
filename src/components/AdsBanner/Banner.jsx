"use client"
import React, { useEffect } from 'react'
import { IoArrowForwardSharp } from "react-icons/io5";
const Banner = () => {



  return (
    <div>
      <div className="main mx-10 my-10">
            <div className="container gap-4 flex justfy-between">
                    <div className="big- bg-[#f1f1f1]  group w-[65%] rounded-md relative overflow-hidden">
                        <div className="items flex flex-col gap-2 z-20 py-10 p-4 absolute  top-4 left-4">
                            <p className="text-[16px]">Sale 20% off all store</p>
                            <div className="title max-w-[250px]">
                              <p className="text-[28px] font-semibold ">Smartphone BLU G91 Pro 2022</p>
                            </div>
                            <div className="button group inline-block ">
                                <button className="flex items-center gap-2 text-[14px] group-text-[#90daff]"> <p className="group-hover:text-[#90daff]">Shop Now</p> <div className="icon group-hover:ml-[5px] group-hover:text-[#90daff] duration-300"><IoArrowForwardSharp className="" /></div> </button>
                            </div>
                        </div>
                        <div className="image h-full w-full ">
                          <img className="group-hover:scale-110 duration-300 h-full w-full" src="https://i.ibb.co/F8XPtJh/product-banner-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="small-bannerbg-[#90daff] w-[35%]">
                        <div className="all-content group overflow-hidden relative">
                            <div className="pragraph absolute top-[10%] p-8 z-20 flex flex-col gap-2">
                               <div className="pragraph max-w-[200px]">
                                  <p className="text-[20px] font-semibold">HyperX Cloud IIWireless</p>
                               </div>
                               <div className="des">
                                  <p className="text-[16px] font-medium">Sale 35% off</p>
                               </div>
                               <div className="button group inline-block group ">
                                 <button className="flex items-center gap-2 text-[14px] "> <p className="">Shop Now</p> <div className="icon"><IoArrowForwardSharp className="" /></div> </button>
                                </div>
                            </div>
                            <div className="image h-full w-full">
                                 <img className="group-hover:scale-105  h-full w-full duration-300 rounded-md" src="https://i.ibb.co/pnVv0J8/product-banner-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Banner