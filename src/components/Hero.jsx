import Image from 'next/image'
import React from 'react'
import { IoArrowForward } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="content bg-[#115061]">
        <div className="content mx-20">
            <div className="items flex justify-between items-center">
                <div className="text-area">
                    <p className="text-base text-white">Starting at $220</p>
                    <h1 className=" text-5xl max-w-xl text-white font-semibold">The best tablet collection 2023</h1>
                    <p className="text-md mt-4 text-white">Exclisive collection 20% offer this weak</p>
                    
                    <div className="button mt-6">
                        <button className="bg-white hover:bg-[#115061] hover:border-[.5px] border-white hover:text-white px-4 py-3 rounded-lg flex items-center gap-2 text-base" >Shop Now <IoArrowForward className="text-lg" /> </button>
                    </div>
                </div>
                <div className="image my-10">
                    <Image src="https://www.shofyapp.shop/assets/img/slider/slider-img-1.png" height={400} width={400} alt="image"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero