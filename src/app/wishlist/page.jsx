
import React from 'react'
import Title from '../../components/ui/Title'
import WhistListTable from "../../components/ui/WhistListTable"

const page = () => {
    // redux data local storage
   
  return (
    <div>
        <div className="main mx-20 my-8">
            <div className="content">
                <div className="title">
                    <Title title="Wishlist"/>
                </div>
                <div className="main">
                    <div className="table-area w-full">
                         <table className=" w-full">
                            <thead className=" bg-[#f1f3f4] w-full">
                                <tr>
                                    <th className="py-2 text-[14px] font-sans text-start px-4">Product</th>
                                    <th className="py-2 text-[14px] font-sans text-center">Price</th>
                                    <th className="py-2 text-[14px] font-sans">Quantity</th>
                                    <th className="py-2 text-[14px] font-sans">Action</th>
                                    <th className="py-2 text-[14px] font-sans"></th>
                                </tr>
                            </thead>
                            <WhistListTable/>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page