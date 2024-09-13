"use client"; // Ensure this is the very first line

import { Carousel } from "flowbite-react";

export default function Virtacal(sliderData) {
  return (
    <div className="content">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mx-20 bg-[#0989ff] rounded-md">
          <Carousel>
             {
               sliderData.sliderData.map((item)=>
                 <div key={item?.id} className=" flex justify-between items-center px-[120px] ">
                    <div className="">
                        <p className="text-white">{item?.name}</p>
                        <div className="tit max-w-[500px]">
                           <p className="text-[48px] text-white font-bold">{item?.desc}</p>
                        </div>
                        <div className="prize-area">
                          <del>${item?.offerprize}</del>
                          <p className="text-[32px] font-semibold">${item?.discountprize}</p>
                        </div>
                    </div>
                    <div className="h-[]">
                        <img className="h-[200px]" src={item?.image} alt="Carousel 1" />
                    </div>
                 </div>
              )
             }
           
          </Carousel>
       </div>
    </div>
  );
}
