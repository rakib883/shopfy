
 import { GetData } from "../../../lib/GetData"
 import Image from "next/image"
 import { FaStar } from "react-icons/fa";
 import PriceFormat from "../../../components/ui/PriceFormat"; 
 
 import { MdOutlineCompareArrows } from "react-icons/md";
 import { IoIosHeartEmpty } from "react-icons/io";
 import { AiTwotoneQuestionCircle } from "react-icons/ai";
 import Border from "../../../components/ui/Border"
 import Title from "../../../components/ui/Title";
 import SinglePageTab from "../../../components/singlePageTab/SinglePageTab"
 import CatagorySlider from "../../../components/ui/CatagorySlider"
 import SinglePageButton from "../../../components/ui/SinglePageButton"

const page = async ({searchParams  }) => {
 const {id} = searchParams

 const response = (`${process.env.BASE_URL}/api/single-product/${id}`)
 const productData = await GetData(response)

//  catagory slider data faching area start
const catagory = (`${process.env.BASE_URL}/api/catagory/${productData?.category}`)
const catagoryData = await GetData(catagory)

  return (
    <div >
      <div className="content mx-20 my-8 ">
        <div className="image-area flex ">
          <div className="image w-[60%] flex justify-center items-center ">
            {
              productData?.thumbnail && 
              <Image className="object-contain w-full h-[50%]" alt="img" width={500} height={500} src={productData?.thumbnail} />
            }
        
          </div>
          <div className="detils w-[40%]">
             <div className="main-area">
                <div className="catagory">
                   <p className="font-[14px] font-sans">{productData?.brand}</p>
                </div>
                <div className="title">
                  <p className="text-[32px] font-sans font-semibold">{productData?.title}</p>
                </div>
                <div className="revew flex items-center gap-4">
                  <div className="stock">
                    <p className="bg-[#f1f8ff] px-4 py-2 font-sans text-[15px]">{productData?.availabilityStatus}</p>
                  </div>
                  <div className="review">
                     <div className="star flex items-center">
                          <div className="item flex">
                              {
                                (() => { // Immediately invoked arrow function
                                  let stars = [];
                                  for (let i = 0; i < 5; i++) { // Correct loop condition (i < 5)
                                    stars.push(
                                      <div key={i} className="main">
                                          <FaStar className="text-[#ffb21d]" />
                                      </div>
                                    );
                                  }
                                  return stars; // Return the array of JSX elements after loop
                                })()
                              }
                          </div>
                          <div className="review">
                             <p className="font-sans text-[15px]">(323)</p>
                          </div>
                      </div>
                    <div className="review"></div>
                  </div>
                </div>
                 <div className="des my-4">
                     <p className="text-[15px]">{productData?.description}</p>
                 </div>
                 <div className="price">
                    <div className="prize">
                      <PriceFormat priceData={productData?.price} className="text-[30px]"/>
                    </div>
                    <div className="disc"></div>
                 </div>
                 <div className="color flex gap-2 my-4">
                    <div className="yello cursor-pointer">
                       <div className="yello bg-yellow-400 border-2 border-green-600 h-4 w-4 rounded-full"></div>
                    </div>
                    <div className="yello cursor-pointer">
                       <div className="yello bg-[#cbcbcb] border-2 border-green-600 h-4 w-4 rounded-full"></div>
                    </div>
                    <div className="yello cursor-pointer">
                       <div className="yello bg-[#494e52] border-2 border-green-600 h-4 w-4 rounded-full"></div>
                    </div>
                    <div className="yello cursor-pointer">
                       <div className="yello bg-[#b4505a] border-2 border-green-600 h-4 w-4 rounded-full"></div>
                    </div>
                 </div>
                 {/* button area start */}
                 <div className="main">
                   <SinglePageButton product={productData}/>
                 </div>
                 {/* button area end */}
                 <div className="flex gap-4 my-2">
                    <div className="compare flex items-center gap-1 cursor-pointer hover:text-[#0989ff] duration-300">
                     <p><MdOutlineCompareArrows /></p>  <p>Compare</p>
                    </div>
                    <div className="white flex items-center gap-1 cursor-pointer hover:text-[#0989ff] duration-300">
                      <p><IoIosHeartEmpty /></p> <p>Add Wishlist</p>
                    </div>
                    <div className="questioin flex items-center gap-1 cursor-pointer hover:text-[#0989ff] duration-300">
                      <p><AiTwotoneQuestionCircle /></p> <p>Ask a question</p>
                    </div>
                 </div>
                 <div className="custom">
                    <Border/>
                 </div>
                 <div className="catagory my-8">
                   <div className="sku">
                     <p className=" font-sans text-[15px]">SKU : {productData?.sku}</p>
                     <p className=" font-sans text-[15px]">Catagory : {productData?.category}</p>
                     <p className=" font-sans text-[15px]">
                      
                     </p>
                   </div>
                   <div className="catagory"></div>
                   <div className="tag"></div>
                 </div>
             </div>
          </div>
        </div>
        {/* review area start */}
            <div className="main">
                <SinglePageTab productData={productData} />
             </div>
             {/* review area end */}
            
            {/* border area  */}
            <div className="mainBorder my-8">
              <Border/>
            </div>
         
            {/* catagor slider area end */}
            <div className="content  my-[50px]">
              <div className="item text-center">
                 <div className="title">
                     <Title title="Next day Products" className="text-[18px] text-[#41b2ff]" />
                 </div>
                 <div className="maini-title">
                    <Title title="Related Products"/>
                 </div>
              </div>
            </div>
            {/* catagpry slider area start */}
            <div className="item">
               <CatagorySlider  catagoryData={catagoryData}/>
            </div>
      </div>
    </div>
  )
}

export default page