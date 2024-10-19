"use client"
import { useDispatch, useSelector } from "react-redux"
import Title from "../../components/ui/Title"
import PriceFormat from "../../components/ui/PriceFormat"
import { HiOutlineXMark } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";
import { GoDash } from "react-icons/go";
import { useEffect, useState } from "react";
import Border from "../../components/ui/Border";
import { loadStripe } from "@stripe/stripe-js";
import { addTocart, decrementQuantity, removeCartData,  } from "../../redux/slice";


const Page =({loginuser})=>{
     
    const stripeResponse = loadStripe("pk_test_51PWscOL3BkBJk9RpVuFlO4f7SrTvDNHnFCVae0x6buv1S703qEvd3iEnDfqVQU9Iz1z6WDhV3M8IfhS1Za0O8v1z00UzkBSn5i") 
    const {user} = loginuser
    // increment area start
    const dispatch = useDispatch()
    const userData = useSelector((state)=>state?.cartData)
    // total price area start
    const [totalPrice,setTotalPrice] = useState()
    useEffect(()=>{
       let total = 0
        userData.map((item)=>{
            total +=  (item?.price)*(item?.quantity)
        })
        setTotalPrice(total)
    },[userData])
   
    const pamentHandeler =async()=>{
        const stripe = await stripeResponse
        const resonse = await fetch("api/checkout",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                item:userData,
                email:user?.email
            })
        })

        const result = await resonse.json()

        const pament = await stripe.redirectToCheckout({
            sessionId: result.id
            
        })

    }

    return(
        <div className="main">
            <div className="main mx-20 my-4">
                {
            userData.length > 0 ?
               <div className="item">
                 <div className="title">
                    <div className="top-title my-8">
                        <Title title="Shopping Cart"/>
                    </div>
                    <div className="bottom w-full flex gap-8">
                        <div className="product w-[70%]">
                            <table className=" table-auto w-full">
                                <thead className=" bg-[#f1f3f4]">
                                    <tr className="">
                                        <th className=" py-2 px-4 text-[14px] text-start">Product</th>
                                        <th className=" py-2 px-4 text-[14px] text-center">	Price</th>
                                        <th className=" py-2 px-4 text-[14px] text-center w-[30%]">	Quantity</th>
                                        <th className=" py-2 px-4 text-[14px] text-center">Remove</th>
                                    </tr>
                                </thead>
                                <tbody className="  mt-4 w-full">
                                    {
                                        userData?.map((item)=>
                                            <tr className=" border-b-2 w-ful text-[14px]" key={item?.id}>
                                                <td className=" ">
                                                    <div className="item flex items-center gap-4">
                                                        <div className="image w-20 h-20 border">
                                                            <img src={item?.image} alt="" />
                                                        </div>
                                                        <div className="title">
                                                            <Title className="text-[14px]" title={item?.name}/>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="price">
                                                        <PriceFormat className="text-[14px]" priceData={item?.price} />
                                                    </div>
                                                </td>
                                                <td className=" text-center">
                                                    <div className="main">
                                                        <div className="content rounded-md flex max-w-[100px] mx-auto items-center border justify-around">
                                                            <button
                                                             onClick={()=>dispatch(addTocart({
                                                                id:item?.id
                                                             }))}
                                                            className=" py-2 text-[14px]">
                                                                <FaPlus />
                                                            </button>
                                                            <p className=" py-2 text-[14px]">{item?.quantity}</p>
                                                            <button
                                                            onClick={()=>dispatch(decrementQuantity({

                                                                id:item?.id
                                                            }))}
                                                            className=" py-2 text-[14px]">
                                                              <GoDash />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className=" text-center">
                                                    <button onClick={()=>dispatch(removeCartData({
                                                        id:item?.id
                                                    }))} className="cross flex justify-center items-center hover:text-red-600 cursor-pointer  gap-1">
                                                        <div className="text">
                                                          <HiOutlineXMark />
                                                        </div>
                                                        <div className="text">
                                                           <p className=" text-14px">Remove</p>
                                                        </div>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                   
                                </tbody>
                            </table>
                            <div className="button-area flex  items-center justify-between my-6">
                                <div className="cupon ">
                                    <div className="search-area flex items-center gap-2">
                                        <div className="in">
                                            <input className=" placeholder:text-[#99898a]" placeholder="Inter your coupon" type="text" />
                                        </div>
                                        <div className="bg-black hover:bg-[#0989ff] duration-300">
                                            <button className=" text-white py-2.5 px-6">Apply</button>
                                        </div>
                                    </div> 
                                </div>
                                <div className="update">
                                   <div className="item bg-black hover:bg-[#0989ff] duration-300">
                                        <button className="text-white py-2.5 px-6">Update cart</button>
                                    </div> 
                                </div>
                            </div>
                        </div>
                         <div className="detils w-[30%] ">
                            <div className="parent bg-white  drop-shadow-xl">
                                <div className="item p-6 ">
                                    <div className="item ">
                                        <div className="title flex justify-between">
                                            <div className="main-title">
                                                <Title className="text-[20px]" title="Subtotal"/>
                                            </div>
                                            <div className="subtotal">
                                                <PriceFormat className="text-[20px]" priceData={totalPrice}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item my-4">
                                        <Border/>
                                    </div>
                                    {/* detils area body  */}
                                    <div className="body">
                                        <div className="item">
                                            <div className="title">
                                                <Title className="text-[15px]" title="Shipping"/>
                                            </div>
                                            <div className="item my-2 flex flex-col gap-1">
                                                <div className="flate flex items-center gap-1">
                                                    <div className="radio">
                                                        <input className=" cursor-pointer  " type="radio" name="" id="" />
                                                    </div>
                                                    <div className="text mt-[2px] flex items-center">
                                                        <p className=" text-[12px] font-sans font-medium">Flat rate :</p>
                                                        <p className="text-[12px] text-[#0989ff] font-sans font-medium">$20</p>
                                                    </div>
                                                </div>
                                                <div className="flate flex items-center gap-1">
                                                    <div className="radio">
                                                        <input className=" cursor-pointer  " type="radio" name="" id="" />
                                                    </div>
                                                    <div className="text mt-[2px] flex items-center">
                                                        <p className=" text-[12px] font-sans font-medium">Local pickup :</p>
                                                        <p className="text-[12px] text-[#0989ff] font-sans font-medium">$50</p>
                                                    </div>
                                                </div>
                                                <div className="flate flex items-center gap-1">
                                                    <div className="radio">
                                                        <input className=" cursor-pointer  " type="radio" name="" id="" />
                                                    </div>
                                                    <div className="text mt-[2px] flex items-center">
                                                        <p className=" text-[12px] font-sans font-medium">Free Shiping :</p>
                                                        <p className="text-[12px] text-[#0989ff] font-sans font-medium">$00</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item my-4">
                                              <Border/>
                                            </div>
                                            <div className="total-price flex justify-between items-center">
                                                <div className="title">
                                                    <Title className="text-[18px]" title="Total"/>
                                                </div>
                                                <div className="price">
                                                  <PriceFormat className="text-[20px]" priceData={totalPrice}/>
                                                </div>
                                            </div>
                                            {/* procid check out button */}
                                            <div onClick={pamentHandeler}  className="button-area bg-black my-2 text-center hover:bg-[#0989ff] duration-300 ">
                                                <button className=" text-white py-3">Proceed to checkout</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                             </div>       
                         </div>
                    </div>
                 </div>
               </div> 
               :
               <div className="hiden my-10">
                 <h1 className=" text-center text-xl font-semibold">No cart data</h1>
               </div>
               
            }
            </div>
        </div>
    )
}

export default Page