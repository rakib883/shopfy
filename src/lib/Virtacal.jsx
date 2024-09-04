"use client"; // Ensure this is the very first line

import { Carousel } from "flowbite-react";

export default function Virtacal(sliderData) {
  console.log(sliderData)
  return (
    <div className="content">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mx-20 bg-[#0989ff]">
          <Carousel>
             {
               sliderData.sliderData.map((item)=>
                 <div className=" flex justify-between items-center px-[200px] ">
                    <div className="">
                        p
                    </div>
                    <div classname="h-[]">
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
