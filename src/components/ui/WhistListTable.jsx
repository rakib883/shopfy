"use client"
import { useDispatch, useSelector } from 'react-redux'
import PriceFormat from './PriceFormat'
import { LuPlus } from "react-icons/lu";
import { VscDash } from "react-icons/vsc";
import { HiOutlineXMark } from "react-icons/hi2";
import { addFavorite, addTocart, favoriteDecrement,favoriteIncrement,removeFavoriteData } from '../redux/slice';

const WhistListTable = () => {
    const favoriteData = useSelector((state)=>state?.favoriteCart)
    const cartData = useSelector((state)=>state?.cartData)


    // increment area start
    const dispatch = useDispatch()

  return (
    <tbody>
        {
          favoriteData.map((item)=>
            <tr className="border-b-[1px]" key={item?.id}>
                <td className=" max-w-[150px] ">
                    <div className="main flex items-center">
                        <div className="image h-20 w-20 border">
                            <img className=" w-full h-full object-contain " src={item?.image} alt="" />
                        </div>
                        <div className="title">
                            <p>{item?.name}</p>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="main text-center">
                        <PriceFormat className="text-[14px]" priceData={item?.price}/>
                    </div>
                </td>
                <td>
                    <div className="quantity flex justify-center items-center  ">
                        <div className=" flex justify-around items-center w-full border rounded-xl  max-w-[100px]">
                            <div 
                              onClick={()=>dispatch(favoriteIncrement({id:item?.id}))}
                            className="inc py-3 cursor-pointer">
                               <LuPlus />
                            </div>
                            <div className="quant cursor-pointer">
                                <p>{item?.quantity}</p>
                            </div>
                            <div 
                            onClick={()=>dispatch(favoriteDecrement({id:item?.id}))}
                            className="decrem cursor-pointer">
                              <VscDash />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div 
                     onClick={()=>dispatch(addTocart({
                        name:item?.name,
                        price:item?.price,
                        id:item?.id,
                        image:item?.image,
                        quantity:item?.quantity
                     }))}
                    className="main  flex justify-center">
                        <div className="button-area max-w-[200px] py-2 px-2   bg-[#0989ff] rounded-sm">
                            <button className="text-[14px] w-full font-sans font-medium text-white">Add to cart</button>
                        </div>
                    </div>
                </td>
                <td className=" text-center ">
                    <div className="item  flex justify-center">
                        <button
                        onClick={()=>dispatch(removeFavoriteData({
                            id:item?.id
                        }))}
                        className="cross max-w-[100px]   flex justify-center items-center hover:text-red-600 cursor-pointer  gap-1">
                            <div className="text-[14px]">
                                <HiOutlineXMark />
                            </div>
                            <div className="text">
                                <p className=" text-[14px]">Remove</p>
                            </div>
                        </button>
                    </div>    
                </td>
            </tr>
          )
        }                       
    </tbody>
   
  )
}

export default WhistListTable