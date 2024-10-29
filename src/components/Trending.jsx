
import { GetData } from "../lib/GetData";
import Title from "../components/ui/Title"
import Card from "../components/ui/Card"


const Trending =async () => {
 const incomingData = `${process.env.PRODECTION_DEVELOPMENT || process.env.LOCALLY_DEVELOPMENT}/api/product`; 
 const product = await GetData(incomingData)
 console.log("data",product)
  return (
    <div>
        <div className="content mx-20">
           <div className="title flex justify-between my-8 gap-8 items-center">
              <div className="title">
                <Title  title="Deal of The Day"/>
              </div>
              <div className=" flex-1 bg-[#f0f2f4] h-[2px]"></div>
              <div className="tab flex gap-4 text-[20px] font-semibold">
                 <div className="new cursor-pointer">New</div>
                 <div className="new cursor-pointer">Fetured</div>
                 <div className="new cursor-pointer">Top Seller</div>
              </div>
           </div>
           <div className="product-content grid grid-cols-4 gap-4">
             {
                 product?.map((item)=>
                  <Card key={item?.id} item={item}/>
               )
             }
           </div>
        </div>
    </div>
  )
}

export default Trending