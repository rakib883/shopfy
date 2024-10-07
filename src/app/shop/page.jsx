import React from 'react'
import Title from '../../components/ui/Title'

const page = () => {
  return (
    <div>
        <div className="content">
            <div className="main mx-20 my-8">
                  <div className="title">
                     <Title title="Shop Grid" />
                  </div>
                  {/* main product area start */}
                  <div className=" flex gap-4">
                    <div className="filter-area w-[25%] bg-red-700">
                        heelo
                    </div>
                    <div className="product bg-green-700 w-[75%]">
                        product
                    </div>
                  </div>
                 
            </div>
        </div>
    </div>
  )
}

export default page