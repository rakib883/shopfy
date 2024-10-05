
import React from 'react'
import { GetData } from '../../lib/GetData'
import Card from '../../components/ui/Card'
import Title from '../../components/ui/Title'

const Eletronic = async() => {
    const response = "http://localhost:3000/api/product"
    const result = await GetData(response)
    console.log("data",result)
    const catagery =[
        {
            id:1,
            name:"beauty",
        },
        {
            id:2,
            name:"fragrances",
        },
        {
            id:3,
            name:"furniture",
        },
        {
            id:4,
            name:"groceries",
        },
    ]
  return (
    <div>
        <div className="allcontent mx-20">
            <div className="content flex gap-10 justify-between ">
                <div className="menu  w-[35%] ">
                    <div className="content border-2 border-[#ff3494] rounded-lg  sticky top-[130px]">
                        <div className="content p-8">
                           <div className="title">
                             <Title className="text-[20px] border-b-2 max-w-[200px] border-[#0989ff]" title="Catagory"/>
                           </div>
                           <div className="catagory mt-4 flex flex-col gap-2 mx-4">
                             {
                                catagery.map((item)=>
                                  <ul key={item?.id}>
                                      <li  className="main list-disc cursor-pointer hover:text-[#0989ff] duration-300">
                                       <p className=" first-letter:uppercase">{item?.name}</p>
                                     </li>
                                  </ul>
                                )
                             }
                           </div>
                        </div>
                    </div>
                </div>
                <div className="product  w-[65%]">
                    <div className="product grid grid-cols-3 gap-4">
                        {
                            result?.slice(10,20).map((item)=>
                              <Card key={item?.id} item={item}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eletronic