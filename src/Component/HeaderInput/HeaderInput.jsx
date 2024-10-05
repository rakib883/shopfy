import React from 'react'
import { CiSearch } from "react-icons/ci";
const HeaderInput = () => {
  return (
        <div className="main">
            <div className="content">
                <div className="input-area relative mx-[100px] flex justify-between items-center border-2 border-[#0989ff]">
                    <div className="flex-1 border-r-2 ">
                    <input type="text" className="border-none outline-none focus:ring-0 focus:border-none" placeholder="Search product ...." />
                    </div>
                    <div className="button ">
                        <div className="item px-2">
                            <select className="border-none outline-none focus:ring-0 focus:border-none"  id="">
                                <option value="">Catagories</option>
                                <option value="">Bangladesh</option>
                                <option value="">Dhaka</option>
                                <option value="">kolkata</option>
                            </select>
                        </div>
                    </div>
                    <div className="button w-[12%] bg-[#0989ff] cursor-pointer flex justify-center items-center text-center py-1.5">
                        <div className="button"> <CiSearch className="text-white text-3xl" /></div>
                    </div>
                     {/* search item area start */}
                    <div className="main-content bg-white shadow-xl  max-h-[500px] absolute w-full bottom-[-25px]">
                      hello
                    </div>
                </div>
            </div>
        </div>    
  )     
}

export default HeaderInput