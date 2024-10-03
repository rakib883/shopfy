import React from 'react'
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
import Login from "../User/Login"
import Navitem from "../../components/ui/NavItem"

const MiddleHeader = () => {
  return (
    <div className=" border-b-[1px] sticky top-0 bg-white z-50">
        <div className="content flex items-center justify-between mx-20">
            <div>
               <Link href="/">
                   <div className="content">
                        <img className="h-[35px]" src="https://i.ibb.co/4j30YnZ/logo.jpg" alt="" />
                    </div>
               </Link>
            </div>
            <div className="flex-1 my-4">
                 <div className="content">
                    <div className="input-area mx-[100px] flex justify-between items-center border-2 border-[#0989ff]">
                        <div className="flex-1 border-r-2 ">
                          <input type="text" className=" w-full px-4  outline-none border-none" placeholder="Search product ...." />
                        </div>
                        <div className="button ">
                            <div className="item px-2">
                               <select className="outline-none border-none w-full cursor-pointer"  id="">
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
                    </div>
                 </div>
            </div>
            <div>
                <div className="main-area flex gap-8 items-center">
                    <div className="profile">
                       <Login/>
                    </div>
                    <div className="user-icon">
                        <Navitem/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MiddleHeader