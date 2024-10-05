"use client"
import React, { useEffect, useState } from 'react'
import { GoDash } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addTocart, decrementQuantity, removeCartData } from '../Redux/slice';
import { toast } from 'react-toastify';
import Link from 'next/link';
const SinglePageButton = ({product}) => {

     const {title,price,id,thumbnail,} = product
   

    // const redux data area start
    const cartData = useSelector((state)=>state?.slice?.cartData) 
    const addCartDispatch = useDispatch()
     const remoceDisparch = useDispatch()
    const [singleData,setSingleData] = useState("")


    useEffect(()=>{
          const cartDataItem = cartData.find((productData)=>productData?.id === product?.id)
          setSingleData(cartDataItem)
    },[cartData])

   console.log("single data",singleData?.id)
  return (
    <div className="buttton flex flex-col gap-2">
     <div className="">
       <p className=" text-[15px] font-sans">Quantity :</p>

       <div className="button flex items-center gap-4 my-1">
           <div className={`${singleData ? "w-[30%] " : "hidden"} button bg-[#f3f5f6]`}>
              <div className="item mx-1 py-2 px-2">
                 <div  className="item w-full  flex justify-between items-center">
                     <div onClick={()=>{addCartDispatch(addTocart({
                          name:title,
                          price:price,
                          id:id,
                          image:thumbnail,
                          quantety:1
                      }))}}
                     
                     className="increment cursor-pointer bg-white rounded-full h-6 w-6 flex justify-center items-center">
                       <FaPlus />
                     </div>
                     <div className="quentity cursor-pointer">{singleData?.quantety}</div>
                     <button
                      onClick={()=>remoceDisparch(decrementQuantity({
                        name:title,
                        price:price,
                        id:id,
                        image:thumbnail,
                        quantety:1
                      }))}
                     className="decrem cursor-pointer bg-white rounded-full h-6 w-6 flex justify-center items-center">
                       <GoDash />
                     </button>
                 </div>
              </div>
           </div>
            
            <div className={`${singleData ? "w-[70%]" : "main w-[100%]"} `}>
              {
                singleData ? 
                <Link href="/cart" className="main bg-black text-white w-full py-3"> 
                    <button className="py-3 w-full font-sans">View cart</button>
                </Link>
                :
                <button onClick={()=>{addCartDispatch(addTocart({
                      name:title,
                      price:price,
                      id:id,
                      image:thumbnail,
                      quantety:1
                  })),toast.success(`${title} ....add successfully`)}}
                className="buy border hover:bg-black hover:text-white duration-300 w-full  cursor-pointer">
                  <div className="item flex justify-center items-center py-2  ">
                      <p>Add to cart</p>
                  </div>
                </button>
              }
            </div>
       </div>
    </div>
    <button  className="buy bg-[#0989ff] hover:bg-black hover:text-white duration-300 text-center text-white font-sans font-semibold py-2 ">
      <p>Buy Now</p>
    </button>
  </div> 
  )
}

export default SinglePageButton