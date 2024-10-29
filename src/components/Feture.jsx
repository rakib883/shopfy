import Title from "../components/ui/Title"
import { GetData } from "../lib/GetData"

const Feture = async() => {
    const response =`${process.env.BASE_URL}/api/product`
    const product = await GetData(response)
  return (
    <div>
        <div className="content mx-20 mt-16">
            <div className="content flex gap-8 justify-between">
                <div className="  w-full  ">
                    <div className="content">
                        <div className="title">
                            <Title className=" text-[24px]" title="Discount Products"/>
                        </div>
                        <div className="conte flex flex-col gap-4 mt-8">
                           {
                            product.slice(0,4).map((item)=>
                              <div className="main cursor-pointer">
                                  <div className="container flex gap-4 items-center bg-[#eceff4]">
                                     <div className="image h-[100px] w-[100px] ">
                                         <img className="" src={item?.images[0]} alt="img" />
                                     </div>
                                     <div className="text">
                                        <p className="text-[12px]">{item?.category}</p>
                                         <p className="text-[14px] font-semibold">{item?.title}</p>
                                     </div>
                                  </div>
                              </div>
                            )
                           }
                        </div>
                    </div>
                </div>
                <div className=" text-start w-full">
                <div className="content">
                        <div className="title">
                           <Title className=" text-[24px]" title="Featured Products"/> 
                        </div>
                    </div>
                </div>
                <div className=" start w-full">
                <div className="content">
                        <div className="title">
                          <Title className=" text-[24px]" title="Selling Products"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feture