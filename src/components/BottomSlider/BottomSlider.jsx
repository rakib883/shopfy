import React from 'react'
import Virtacal from './../../lib/Virtacal';

const BottomSlider = () => {
    const sliderBanner = [
        {
            id:1,
            image:"https://i.ibb.co/mRK5rRz/banner-slider-1.png",
            name:"Tblet collection 2023",
            desc:"Samsang glaxy tab S6 Wifi Tablet",
            discountprize:"1240.00",
            offerprize:"975.00"
        },
        {
            id:2,
            image:"https://i.ibb.co/7SzXTxK/slider-img-3-1.png",
            name:"Latest technology added",
            desc:"Samsang glaxy tab S6 Wifi Tablet",
            discountprize:"1540.00",
            offerprize:"975.00"
        },
        {
            id:3,
            image:"https://i.ibb.co/pLZqkVq/banner-slider-3.png",
            name:"Tblet collection 2023",
            desc:"Samsang glaxy tab S6 Wifi Tablet",
            discountprize:"1840.00",
            offerprize:"675.00"
        },
    ]

  return (
    <div>
        <div className="content my-16">
            <Virtacal sliderData={sliderBanner}/>
        </div>
    </div>
  )
}

export default BottomSlider