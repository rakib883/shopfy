import { MdOutlineLocalShipping } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const TopHeaser = () => {
  return (
    <div className="bg-[#010f1c] text-white h-[30px]">
        <div className="content mx-20 flex h-full justify-between">
            <div className="text flex items-center gap-1 ">
                <div className="icon"><MdOutlineLocalShipping className="text-xl text-[#df9e3d]" /></div>
                <p className=" font-sans">Free express shiping on order $77</p>
            </div>
            <div className="text flex items-center ">
                <div className="languafe cursor-pointer ">
                    <div className="text flex items-center gap-1.5 px-4 h-full border-r-[1px]">
                        <div className="text text-[12px]">Language</div>
                        <MdOutlineKeyboardArrowDown className=" text-lg mt-[1px]" />
                    </div>
                </div>
                <div className="languafe cursor-pointer ">
                    <div className="text flex items-center gap-1.5 px-4 border-r-[1px] h-full">
                        <div className="text text-[12px]">USD</div>
                        <MdOutlineKeyboardArrowDown className=" text-lg mt-[1px]" />
                    </div>
                </div>
                <div className="languafe cursor-pointer ">
                    <div className="text flex items-center gap-1.5 px-4">
                        <div className="text text-[12px]">Setting</div>
                        <MdOutlineKeyboardArrowDown className=" text-lg mt-[1px]" />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopHeaser