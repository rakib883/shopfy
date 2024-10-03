"use client"

import { useState } from "react"
import Border from "../components/ui/Border"
import { FaStar } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import Title from "../components/ui/Title"
import InputArea from "../components/ui/InputArea"
const SinglePageTab = ({productData}) => {
    const [descPrtion,setDescprtion] = useState(1)

  return (
    <div className="content   items-center">
    <div className="haeader flex justify-center gap-8 w-full ">
       <div onClick={()=>setDescprtion(1)} className="des relative ">
          <p className={`${descPrtion === 1 && "customBottomBorder text-black"} text-[20px] font-sans  cursor-pointer text-[#a1a3a5]`}>Description</p>
       </div>
       <div onClick={()=>setDescprtion(2)} className="add relative ">
          <p className={`${descPrtion === 2 && "customBottomBorder text-black"} text-[20px] font-sans  cursor-pointer text-[#a1a3a5]`}>
            Additional information
          </p>
       </div>
       <div onClick={()=>setDescprtion(3)} className="review relative  ">
         <p className={`${descPrtion === 3 && "customBottomBorder text-black"} text-[20px] font-sans  cursor-pointer text-[#a1a3a5]`}>Reviews  </p>
       </div>
    </div>
    <div className="border my-4 ">
       <Border/> 
    </div>
    <div className="content-body my-8">
      <div className="item">
          {
            descPrtion === 1 &&
            <div className="dec">
               <div className="item">
                  <div className="title max-w-xl">
                      <p className=" text-[20px] font-sans font-semibold">{productData?.title}</p>
                      <p className="font-sans text-[16px]">{productData?.description}</p>
                  </div>
               </div>
            </div>
          }
           
           {
            descPrtion === 2 &&
            <div className="dec">add</div>
          }
         {
            descPrtion === 3 &&
            <div className="dec">
              <div className="review flex gap-10">
                 <div className="review w-[50%]">
                    <div className="review border w-full">
                        <div className="review-item m-4">
                          <div className="title">
                             <p className="texr-[24px] font-sans font-semibold">Customer reviw</p>
                             <div className="rating-area">
                               <div className="ratong">
                                  <div className="5start"></div>
                                  <div className="rating flex gap-2">
                                      <div className="rev">
                                          <p className=" text-[40px] font-sans font-semibold">4.5</p>
                                      </div>
                                      <div className="review mt-8">
                                         <div className="satr flex items-center ">
                                                  <div className="main flex gap-1">
                                                        {
                                                        (()=>{
                                                          let star = []
                                                          for(let i = 0 ; i<5; i++){
                                                            star.push(
                                                              <div key={i} className="main">
                                                                <FaStar className="text-[#ffb21d]" />
                                                              </div>
                                                            )
                                                          }
                                                          return star
                                                        })()
                                                      }
                                                  </div>
                                                  <div className="review">
                                                    <p>(322)</p>
                                                  </div>
                                         </div>
                                      </div>
                                  </div>
                               </div>
                               <div className="icon"></div>
                             </div>
                             <div className="bars">
                                    <div className=" flex items-center gap-4 text-[#b3b5b9] text-[15px]">
                                        <div className="review">
                                           <p>5Start</p>
                                        </div>
                                        <div className="main bg-[#edeeee] flex-1 mt-1.5">
                                            <div className="child w-[80%] h-2 bg-[#ffb21d]"></div>
                                        </div>
                                        <div className="review">82%</div>
                                    </div>
                                    <div className=" flex items-center gap-4 text-[#b3b5b9] text-[15px]">
                                        <div className="review">
                                           <p>4Start</p>
                                        </div>
                                        <div className="main bg-[#edeeee] flex-1 mt-1.5">
                                            <div className="child w-[70%] h-2 bg-[#ffb21d]"></div>
                                        </div>
                                        <div className="review">70%</div>
                                    </div>
                                    <div className=" flex items-center gap-4 text-[#b3b5b9] text-[15px]">
                                        <div className="review">
                                           <p>3Start</p>
                                        </div>
                                        <div className="main bg-[#edeeee] flex-1 mt-1.5">
                                            <div className="child w-[60%] h-2 bg-[#ffb21d]"></div>
                                        </div>
                                        <div className="review">60%</div>
                                    </div>
                                    <div className=" flex items-center gap-4 text-[#b3b5b9] text-[15px]">
                                        <div className="review">
                                           <p>2Start</p>
                                        </div>
                                        <div className="main bg-[#edeeee] flex-1 mt-1.5">
                                            <div className="child w-[50%] h-2 bg-[#ffb21d]"></div>
                                        </div>
                                        <div className="review">50%</div>
                                    </div>
                                    <div className=" flex items-center gap-4 text-[#b3b5b9] text-[15px]">
                                        <div className="review">
                                           <p>1Start</p>
                                        </div>
                                        <div className="main bg-[#edeeee] flex-1 mt-1.5">
                                            <div className="child w-[40%] h-2 bg-[#ffb21d]"></div>
                                        </div>
                                        <div className="review">4%</div>
                                    </div>
                              </div>  
                          </div>
                        </div>
                    </div>
                    {/* user review area start */}
                    <div className="content my-4">
                       <div className="rating">
                         <div className="title">
                           <p className="font-semibold text-[25px]">Rating & Review</p>
                         </div>
                         <div className="content flex flex-col gap-4 mt-4">
                           {
                              productData?. reviews.map((item)=>(
                                <div key={item?.reviewerEmail} className="item flex">
                                   <div className="profile w-[10%]">
                                     <FaCircleUser className=" text-4xl text-[#edeeee]" />
                                   </div>
                                   <div className="desc w-[90%]">
                                      <div className="rating flex">
                                         {
                                        
                                          (()=>{
                                            let star = []
                                            for(let i = 0 ; i<5;i++){
                                              star.push(
                                                <div key={i} className="main">
                                                   <FaStar className="text-[#ffb21d] text-xs" />
                                                </div>
                                              )
                                            }
                                            return star
                                          })()
                                         }
                                      </div>
                                      {/* user name area start */}
                                      <div className="main flex items-center gap-4">
                                         <p className="text-[14px] text-black font-bold">{item?.reviewerName}</p>
                                         <p className="text-[14px] text-black">{item?.date}</p>
                                      </div>
                                      {/* descprtion area start */}
                                      <p className="text-[14px]">{item?.comment}</p>
                                   </div>
                                </div>
                              ))
                           }
                         </div>
                       </div>
                    </div>
                 </div>
                 <div className="form w-[50%]">
                   <div className="main">
                     <div className="content">
                        <div className="title">
                           <Title title="Review this product" className="text-[24px]" />
                        </div>
                        <p className="text-[16px]">Your email address will not be published. Required fields are marked *</p>
                     
                         <div className="mt-4 flex items-center gap-4">
                            <div className="text">
                                <p className="font-semibold">Your Rating :</p>
                            </div>
                            <div className="rating flex items-center">
                              <div className="item flex mt-1">
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
                               <p>(322)</p>
                            </div>
                         </div>
                         <div className="input-area flex flex-col gap-8 mt-8">
                           <div className="name-area">
                               <InputArea/>
                           </div>
                           <div className="name-area">
                               <InputArea/>
                           </div>
                           <div className="text w-full border relative">
                               <textarea placeholder="Comment" className=" w-full border-none outline-none px-6 text-[13px]" name="" id=""></textarea>
                               <p className=" absolute top-[-15px] px-2 bg-white left-4">Comment</p>
                           </div>
                         </div>
                          <div className="check-area mt-2">
                              <div className="check flex items-center gap-2">
                                 <div className="check cursor-pointer">
                                    <input type="checkbox" name="" id="" />
                                 </div>
                                 <div className="text mt-1.5">
                                    <p className="text-[14px]">Save my name, email, and website in this browser for the next time I comment.</p>
                                 </div>
                              </div>
                              <div className="button my-4 font-semibold">
                                 <button className="bg-[#0989ff] hover:bg-black hover:text-white duration-300 px-8 py-2 text-white font-sans">Submit</button>
                              </div>
                           </div>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          }
      </div>
    </div>
 </div>
  )
}

export default SinglePageTab