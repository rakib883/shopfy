import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineMonetizationOn } from "react-icons/md";
import { PiMemberOfBold } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";

const Faceleties = () => {
    const faceleties = [
        {
            id:1,
            title:"Free Delivary",
            desc:"Orders from all item",
            icon:<TbTruckDelivery />
        },
        {
            id:2,
            title:"Return & Refunf",
            desc:"Maney back guarantee",
            icon:<MdOutlineMonetizationOn />
        },
        {
            id:3,
            title:"Member Discount",
            desc:"Onevery order over $140.00",
            icon:<PiMemberOfBold />
        },
        {
            id:4,
            title:"Support 24/7",
            desc:"Contact us 24 hours a day",
            icon:<BiSupport />
        },
    ]
  return (
    <div>
        <div className="content flex justify-between gap-2 mx-20 my-16">
            {
                faceleties.map((item)=>
                  <div key={item?.id} className="main bg-[#f6f7f9] w-full rounded-md">
                      <div className="content p-4 flex gap-2">
                        <div className="icon text-4xl text-[#fd4b6b]">
                            {item?.icon}
                        </div>
                        <div className="text">
                            <p className=" font-semibold">{item?.title}</p>
                            <p className="text-[14px] font-medium">{item?.desc}</p>
                        </div>
                      </div>
                  </div>
                )
            }
        </div>
    </div>
  )
}

export default Faceleties