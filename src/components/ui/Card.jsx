import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa";

const Card = ({item}) => {
    const {images, category,description, price,discountPercentage} = item
  return (
    <div>
        <div className="content border rounded-md group hover:shadow-2xl duration-300 cursor-pointer">
            <div className="image h-[200px] overflow-hidden">
                <Image className=" group-hover:scale-110 duration-300 object-contain w-full h-full" src={images[0]} height={300} width={300} alt="product"/>
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
                    <del className="text-base">${price}</del>
                    <p className="text-prymary font-semibold text-md">${discountPercentage}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card