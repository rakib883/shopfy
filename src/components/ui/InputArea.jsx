 import React from 'react'
 
 const InputArea = () => {
   return (
     <div>
        <div className="main border relative">
            <input className="border-none outline-none w-full text-[13px]  px-6 text-[#576068] py-3" type="text" placeholder="Your name" name="" id="" />
            <p className="absolute left-4 top-[-13px] bg-white px-2">Your name</p>
        </div>
     </div>
   )
 }
 
 export default InputArea