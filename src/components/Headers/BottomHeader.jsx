import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import Link from "next/link";


const BottomHeader = () => {


    // menu item area
    const menu = [
        {name:"Home",path:"/"},
        {name:"Shop",path:"/shop"},
        {name:"Product",path:"/product"},
        {name:"Cupon",path:"/cupon"},
        {name:"Blog",path:"/blog"},
        {name:"Contact",path:"/contact"},
    ]
  return (
    <div className="shadow-xl ">
        <div className="content mx-20 flex justify-between items-center ">
            <div className="catagory bg-[#0989ff] py-1.5 cursor-pointer">
                <div className="con flex justify-between items-center">
                    <div className="all-content py-2 flex px-4 gap-2 items-center">
                        <HiOutlineBars3BottomLeft className="text-2xl text-white" />
                        <p className="text-white font-sans">All Deperdment</p>
                    </div>
                    <div className="arrow px-4">
                      <MdOutlineKeyboardArrowDown className="text-2xl text-white" />
                    </div>
                </div>
            </div>
            <div className="menu flex-1">
                <div className="content flex gap-4 mx-6">
                    {
                        menu.map((item)=>(
                            <div key={item?.name} className="content">
                                 <Link className=" font-sans text-[14px] font-base font-semibold" href={item?.path}>{item?.name}</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="hotline">
                <div className="content flex gap-2 items-center">
                    <div className="icon">
                      <BiPhoneCall className=" text-[#0989ff] text-2xl" />
                    </div>
                    <div className="text leading-4">
                       <p className=" text-[14px] font-sans">Hotline :</p>
                       <p className=" text-[14px] cursor-pointer font-sans hover:text-[#0989ff] font-semibold duration-300">+(402) 763 282 46</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BottomHeader