import React from 'react'
import Link from 'next/link';
import Login from "../components/User/Login"
import HeaderInput from "../components/HeaderInput"
import NavItem from "../components/navItem/NavItem"
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
                <HeaderInput/>
            </div>
            <div>
                <div className="main-area flex gap-8 items-center">
                    <div className="profile">
                       <Login/>
                    </div>
                    <div className="user-icon">
                       <NavItem/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MiddleHeader