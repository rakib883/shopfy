"use client"

import { useEffect, useState } from "react"
import { GetData } from "../../../lib/GetData"
import Image from "next/image"
import { FaStar } from "react-icons/fa";
import PriceFormat from "../../../components/ui/PriceFormat";
import { FaPlus } from "react-icons/fa6";
import { GoDash } from "react-icons/go";
import { MdOutlineCompareArrows } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import Border from "../../../components/ui/Border"



const page = ({searchParams  }) => {

 const {id} = searchParams
 const [productData,setProductData] = useState([])

 console.log("hello",productData)
 useEffect(()=>{
   const productHandeler =  async()=>{
      try{
         const resopnse = await GetData(`/api/single-product/${id}`)
         setProductData(resopnse)
      }catch(error){
         console.log(error)
      }
   }
   productHandeler()
 },[id])


  return (
    <div >
      <div className="content mx-20 my-8 ">
        <div className="image-area flex ">
          <div className="image w-[60%] flex justify-center items-center ">
            <Image className=" object-contain w-full h-[50%]" alt="img" width={200} height={200} src={productData?.thumbnail} />
          </div>
          <div className="detils w-[40%]">
             <div className="main-area">
                <div className="catagory">
                   <p className="font-[14px] font-sans">{productData?.brand}</p>
                </div>
                <div className="title">
                  <p className="text-[32px] font-sans font-semibold">{productData?.title}</p>
                </div>
                <div className="revew flex items-center gap-4">
                  <div className="stock">
                    <p className="bg-[#f1f8ff] px-4 py-2 font-sans text-[15px]">{productData?.availabilityStatus}</p>
                  </div>
                  <div className="review">
                     <div className="star flex items-center">
                          <div className="item flex">
                              {
                                (() => { // Immediately invoked arrow function
                                  let stars = [];
                                  for (let i = 0; i < 5; i++) { // Correct loop condition (i < 5)
                                    stars.push(
                                      <div key={i} className="main">
                                          <FaStar className="text-[#ffb21d]" />
                                      </div>
                                    );
                                  }
                                  return stars; // Return the array of JSX elements after loop
                                })()
                              }
                          </div>
                          <div className="review">
                             <p className="font-sans text-[15px]">(323)</p>
                          </div>
                      </div>
                    <div className="review"></div>
                  </div>
                </div>
                 <div className="des my-4">
                     <p className="text-[15px]">{productData?.description}</p>
                 </div>
                 <div className="price">
                    <div className="prize">
                      <PriceFormat priceData={productData?.price} className="text-[30px]"/>
                    </div>
                    <div className="disc"></div>
                 </div>
                 <div className="color flex gap-2 my-4">
                    <div className="yello cursor-pointer">
                       <div className="yello bg-yellow-400 border-2 border-green-600 h-4 w-4 rounded-full"></div>
                    </div>
                    <div className="yello cursor-pointer">
                       <div className="yello bg-[#cbcbcb] border-2 border-green-600 h-4 w-4 rounded-full"></div>
                    </div>
                    <div className="yello cursor-pointer">
                       <div className="yello bg-[#494e52] border-2 border-green-600 h-4 w-4 rounded-full"></div>
                    </div>
                    <div className="yello cursor-pointer">
                       <div className="yello bg-[#b4505a] border-2 border-green-600 h-4 w-4 rounded-full"></div>
                    </div>
                 </div>
                 <div className="buttton flex flex-col gap-2">
                   <div className="">
                      <p className=" text-[15px] font-sans">Quantity :</p>
                      <div className="button flex items-center gap-4 my-1">
                          <div className="button w-[30%] bg-[#f3f5f6] ">
                             <div className="item mx-1 py-2 px-2">
                                <div className="item w-full  flex justify-between items-center">
                                    <div className="increment cursor-pointer bg-white rounded-full h-6 w-6 flex justify-center items-center">
                                      <FaPlus />
                                    </div>
                                    <div className="quentity cursor-pointer">0</div>
                                    <div className="decrem cursor-pointer bg-white rounded-full h-6 w-6 flex justify-center items-center">
                                      <GoDash />
                                    </div>
                                </div>
                             </div>
                          </div>
                          <div className="buy border hover:bg-black hover:text-white duration-300 w-[70%] cursor-pointer">
                            <div className="item flex justify-center items-center py-2 ">
                               <p>Add to cart</p>
                            </div>
                          </div>
                      </div>
                   </div>
                   <div className="buy bg-[#0989ff] hover:bg-black hover:text-white duration-300 text-center text-white font-sans font-semibold py-2 ">
                     <button>Buy Now</button>
                   </div>
                 </div>
                 <div className="flex gap-4 my-2">
                    <div className="compare flex items-center gap-1 cursor-pointer hover:text-[#0989ff] duration-300">
                     <p><MdOutlineCompareArrows /></p>  <p>Compare</p>
                    </div>
                    <div className="white flex items-center gap-1 cursor-pointer hover:text-[#0989ff] duration-300">
                      <p><IoIosHeartEmpty /></p> <p>Add Wishlist</p>
                    </div>
                    <div className="questioin flex items-center gap-1 cursor-pointer hover:text-[#0989ff] duration-300">
                      <p><AiTwotoneQuestionCircle /></p> <p>Ask a question</p>
                    </div>
                 </div>
                 <div className="custom">
                    <Border/>
                 </div>
                 <div className="catagory my-8">
                   <div className="sku">
                     <p className=" font-sans text-[15px]">SKU : {productData?.sku}</p>
                     <p className=" font-sans text-[15px]">Catagory : {productData?.category}</p>
                     <p className=" font-sans text-[15px]">
                       {
                          productData?.tags
                       }
                     </p>
                   </div>
                   <div className="catagory"></div>
                   <div className="tag"></div>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page