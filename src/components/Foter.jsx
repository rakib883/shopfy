import Image from 'next/image'
import React from 'react'
import Title from '../components/ui/Title'
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaVimeoV } from "react-icons/fa";

const Foter = () => {
  return (
    <div className="bg-[#f4f7f9]">
        <div className="content mx-20 py-20 mt-4 grid grid-cols-4 gap-8">
            <div className="icon-area">
                <div className="image">
                    <Image src="https://i.ibb.co/4j30YnZ/logo.jpg" height={120} width={120} alt="foter" />
                </div>
                <p className="pr-4 my-4 text-[18px]">
                    We are a team of designers and developers that create high quality WordPress
                </p>
                <div className="icon-icon flex gap-2">
                   <div className="facebook bg-[#ffffff] h-8 w-8 drop-shadow-xl flex justify-center items-center cursor-pointer hover:bg-prymary duration-300 rounded-sm">
                       <FaFacebookF className="text-[#55585b]" />
                   </div>
                   <div className="bg-[#ffffff] h-8 w-8 drop-shadow-xl flex justify-center items-center cursor-pointer hover:bg-prymary duration-300 rounded-sm">
                       <FaXTwitter className="text-[#55585b]" />
                   </div>
                   <div className="bg-[#ffffff] h-8 w-8 drop-shadow-xl flex justify-center items-center cursor-pointer hover:bg-prymary duration-300 rounded-sm">
                       <FaLinkedinIn  className="text-[#55585b]"/>
                   </div>
                   <div className="bg-[#ffffff] h-8 w-8 drop-shadow-xl flex justify-center items-center cursor-pointer hover:bg-prymary duration-300 rounded-sm">
                       <FaVimeoV className="text-[#55585b]" />
                   </div>
                </div>
            </div>
            <div className="link">
              <div className="title">
                <Title className="text-[20px]" title="My Account"/>
              </div>
              <div className="item">
                <ul className=" flex flex-col gap-2 text-[14px] mt-4">
                  <li  className=" hover:text-prymary duration-300 cursor-pointer list-disc ml-4">Track Orders</li> 
                  <li className=" hover:text-prymary duration-300 cursor-pointer list-disc ml-4">Shipping</li>  
                  <li  className=" hover:text-prymary duration-300 cursor-pointer list-disc ml-4">Wishlist</li>  
                  <li  className=" hover:text-prymary duration-300 cursor-pointer list-disc ml-4">My Account</li>  
                  <li  className=" hover:text-prymary duration-300 cursor-pointer list-disc ml-4">Order History</li>      
                  <li  className=" hover:text-prymary duration-300 cursor-pointer list-disc ml-4">Returns</li>  
                </ul>
              </div>
            </div>
            <div className="">
             <div className="title">
                <Title className="text-[20px]" title="Infomation"/>
              </div>
              <div className="item">
                <ul className="  flex flex-col gap-2 text-[14px] mt-4">
                  <li  className=" cursor-pointer hover:text-prymary duration-300 list-disc ml-4">Our Story</li> 
                  <li className=" cursor-pointer hover:text-prymary duration-300 list-disc ml-4">Careers</li>  
                  <li  className=" cursor-pointer hover:text-prymary duration-300 list-disc ml-4">Privacy Policy</li>  
                  <li  className=" cursor-pointer hover:text-prymary duration-300 list-disc ml-4">Terms & Conditions</li>  
                  <li  className="  cursor-pointer hover:text-prymary duration-300list-disc ml-4">Latest News</li>      
                  <li  className=" cursor-pointer hover:text-prymary duration-300 list-disc ml-4">Contact Us</li>  
                </ul>
              </div>
            </div>
            <div className="talk">
              <div className="title">
                  <Title className="text-[20px]" title="Infomation"/>
                </div>
                <div className="content mt-4">
                   <p className="text-[14px]">Got Questions? Call us</p>
                   <h1 className="text-[22px] font-semibold">+670 413 90 762</h1>
                   <div className="icon">
                     <div className="gmail flex items-center gap-2 cursor-pointer hover:text-prymary">
                        <MdOutlineEmail />
                        <p>shofy@support.com</p>
                     </div>
                   </div>
                </div>
            </div>
        </div>
        <div className="mai">
          <div className="bg-[#e4e8eb] mx-20 h-[1px]"></div>
           <div className="item">
             <p className="text-base mx-20 my-4">© 2023 All Rights Reserved | HTML Template by <a className="text-prymary" href="https://protflio-lyart.vercel.app/">Rakib</a> </p>
           </div>
        </div>
    </div>
  )
}

export default Foter