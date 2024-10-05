"use client"
import React, { useEffect, useState } from 'react'
import { TbArrowsSort } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import Title from './Title';
import Border from "../ui/Border"
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineXMark } from "react-icons/hi2";
import PriceFormat from './PriceFormat';
import {  removeCartData } from '../redux/slice';
import Link from 'next/link';
const NavItem = () => {
   const dispatch = useDispatch()

    const [navBarItem,setNavbarItem] = useState(false)
    // redux data area start
    const userData = useSelector((state)=>state?.cartData) 
    const [totalPrice,setTotalPrice] = useState("")
     useEffect(()=>{
          let total = 0
          userData.map((item)=>{
             total += (item?.price)*(item?.quantety)
          })
          setTotalPrice(total)
     },[userData])

    //   favorite redux data area start
   const favoriteData = useSelector((item)=>item?.favoriteCart)

console.log("cart data",favoriteData)

  return (
    <div>
         <div className="user-icon flex gap-6 cursor-pointer">
            <div className="arrow">
                <TbArrowsSort className="text-2xl" />
             </div>
             <div className="arrow">
               <Link href="/wishlist" className="item relative">
                 <FaRegHeart className="text-2xl" />
                  <div className="main flex justify-center absolute top-[-7px] right-[-5px] items-center bg-[#0989ff] h-4 w-4 rounded-full">
                    <p className="text-white font-medium text-[10px]" >{favoriteData.length}</p>
                  </div>
                </Link>
             </div>
             <div onClick={()=>setNavbarItem(true)} className="arrow cursor-pointer">
               <div className="item relative">
                 <IoBagOutline className="text-2xl" />
                  <div className="main flex justify-center absolute top-[-7px] right-[-5px] items-center bg-[#0989ff] h-4 w-4 rounded-full">
                    <p className="text-white font-medium text-[10px]" >{userData?.length}</p>
                  </div>
               </div>
            </div>
        </div> 
        {/* iner nav area start */}
         <div className="main-content">
            {
            navBarItem === true &&
            <div className="item bg-black/60 absolute top-0 w-full h-screen right-0">
                <div className={`${navBarItem === true ? "right-0 duration-300" : "right-[-300px] duration-300"}  duration-300 main-item bg-white w-[320px]  -top-1 fixed h-screen`}>
                    <div className="">
                       <div className="title px-6 pt-6 flex justify-between items-center">
                          <div className="title">
                             <Title className="text-[16px]" title="Shopping cart"/>
                          </div>
                          <div onClick={()=>setNavbarItem(false)} className="cross cursor-pointer">
                            <HiOutlineXMark className="text-2xl hover:rotate-90 duration-300" />
                          </div>
                       </div>
                       <div className="border-area my-4">
                          <Border/>
                       </div>
                     {
                      userData.length > 0 ?  
                     <div className="parent">
                       <div className="data-area  overflow-y-auto">
                         <div className="item flex max-h-[300px] overflow-y-auto-hidden px-6 flex-col gap-4">
                            {
                                userData?.map((item)=>
                                  <div key={item?.id} className="main cursor-pointer flex gap-4">
                                     <div className="image h-[50px] w-[50px] bg-white border">
                                        <img className="" src={item?.image} alt="" />
                                     </div>
                                     <div className="title">
                                         <div className="title flex gap-4 ">
                                            <Title className="text-[12px] text-[#0989ff] hover:text-indigo-700 duration-300" title={item?.name.substring(0,20)}/>
                                            <p 
                                              onClick={()=>dispatch(removeCartData({
                                                id:item?.id
                                              }))}
                                            ><HiOutlineXMark className="text-xl" /></p>
                                         </div>
                                         <div className="remove flex items-center">
                                             <p className=" text-[12px] font-semibold">${item?.price}</p>
                                             <p><HiOutlineXMark className="text-[10px] mt-1 text-[#0989ff]" /></p>
                                             <p  className="text-[10px] mt-1 text-[#0989ff]">{item?.quantety}</p>
                                         </div>
                                     </div>
                                  </div>
                                )
                            }
                         </div>
                       </div>
                       <div className="main-area  absolute bottom-0 w-full bg-white mb-4">
                          <div className="item mx-4">
                              <div className="item flex justify-between items-center my-4">
                                 <div className="title">
                                    <Title className="text-[16px]" title="Subtotal:"/>
                                 </div>
                                 <div className="price">
                                    <PriceFormat className="text-[16px]" priceData={totalPrice}/>
                                 </div>
                              </div>
                              <div className="button-area flex flex-col gap-4">
                                 <Link href="/cart" onClick={()=>setNavbarItem(false)} className="view-cart">
                                     <button className="w-full hover:bg-[#0989ff] duration-300 hover:text-white bg-black text-white py-3 text-[16px] font-medium">View cart</button>
                                 </Link>
                                 <div className="view-cart">
                                     <button className="w-full border-[2px] border-black hover:border-transparent hover:bg-[#0989ff] duration-300 hover:text-white  text-black py-3 text-[16px] font-medium">Checkout</button>
                                 </div>
                              </div>
                          </div>
                       </div>
                     </div> :
                     <div className="main text-center my-8">
                        <Title className="text-xl" title="No cart data"/>
                     </div>
                     }
                    </div>
                </div>
            </div>
            }
        </div>
        {/* iner nav area end */}
    </div>
  )
}

export default NavItem