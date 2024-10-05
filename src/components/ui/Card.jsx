"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux'
import {addFavorite, addTocart} from "../redux/slice"
import { FaRegEye } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import Link from 'next/link';
import PriceFormat from "../ui/PriceFormat"
import { toast } from 'react-toastify';
 
const Card = ({item}) => {

    const cartData = useSelector((state)=>state?.slice?.cartData)
    const {images, category,description, price,discountPercentage,id,title,thumbnail} = item 
    const addCartDispatch = useDispatch()
     
    // existing check cart data area start
    const [existingData,setExistingData] = useState()
    // useEffect(()=>{
    //   const cartExistingData =  cartData.find((cartId)=>cartId?.id === item?.id)
    //   setExistingData(cartExistingData)
    // },[cartData,item?.id])
    

    // favorite area start 
    const addFavoriteDispatch = useDispatch()

    // existing favorite check
    const favoriteData = useSelector((item)=>item?.slice?.favoriteCart)
    const [isFavorite,setFavorite] = useState(null)
    // useEffect(()=>{
    //     const existingFavorite = favoriteData.find((itemId)=>itemId?.id === id)
    //     setFavorite(existingFavorite)
    // },[favoriteData])
  return (
    <div>
        <div className="content border rounded-md group hover:shadow-2xl duration-300 cursor-pointer ">
            <div className="image h-[200px] relative overflow-hidden group">
                <Link href={{
                    pathname:`/single-product/${id}`,
                    query:{id:id}
                }}>
                    <Image className=" group-hover:scale-110 duration-300 object-contain w-full h-full" src={images[0]} height={300} width={300} alt="product"/>
                </Link>
                 <div className="hover-icon absolute bottom-8 right-[-50px] group-hover:right-4 duration-300 flex flex-col bg-white shadow-lg border">
                    {
                    <button title={existingData ? "Product added" : ""} disabled={ existingData && true} onClick={()=>{addCartDispatch(addTocart({
                        name:title,
                        price:price,
                        id:id,
                        image:thumbnail,
                        quantety:1
                    })),toast.success(`${title}....add succesfully`)  }} className={` cart-icon p-2 w-full border-b-2 flex justify-between items-center`}>
                        <IoCartOutline className="text-xl  w-full" />
                    </button>
                    }
                    <div className="eye p-2 w-full border-b-2 flex justify-between items-center ">
                       <FaRegEye className="text-xl " />
                    </div>
                    <div className="main">
                        {
                         isFavorite ? 
                         <div 
                           onClick={()=>toast.error(`${title.substring(0,15)}...existing`)}
                         className="item">
                            <div className=" p-2 flex justify-between items-center">
                               <FaRegHeart className="text-xl text-[red]" />
                            </div>
                         </div>
                         :  
                        <div 
                        onClick={()=>{addFavoriteDispatch(addFavorite({
                            name:title,
                            price:price,
                            id:id,
                            image:thumbnail,
                            quantety:1
                        })),toast.success(`${title} ...favorit listed`)}}
                        className=" p-2 flex justify-between items-center">
                        <FaRegHeart className="text-xl" />
                        </div>
                        }
                    </div>    
                 </div>
            </div>
            <div className="border"></div>
            <div className="desc m-6">
                <p className="text-[12px] text-[#757779]">{category}</p>
                <p className=" font-semibold text-[14px]">{description.substring(0,40)}</p>
                <div className=" flex gap-2 font-sans">
                    <p className=" flex gap-[2px] text-[#ffb21d] my-1">
                    {(() => {
                            let stars = [];
                            for(let i = 0; i < 5; i++){
                                stars.push(<span key={i}><FaStar clasname="" /></span>);
                            }
                            return <>{stars}</>; // This wraps the elements in a fragment
                        })()}
                    </p>
                    <p className="text-black">255 review</p>
                </div>
                <div className="price flex items-center gap-2">
                     <del className="text-base text-[12px]">
                      <PriceFormat className="text-[12px]" priceData={price}/>
                    </del>
                    <p className="text-prymary font-semibold text-md">
                        <PriceFormat className="text-[15px]" priceData={discountPercentage}/>
                    </p>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card