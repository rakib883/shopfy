"use client"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Card from "./Card";

function CatagorySlider({catagoryData}) {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="slider-container">
      <Slider {...settings}>
         {
            catagoryData.length > 0 ?
            catagoryData?.map((item)=>
               <div key={item?.id} className="main">
                    <div className="item mx-2">
                        <Card item={item}/>
                    </div>
               </div>
            ) :
            <div className="nodata text-center">
                <p className=" text-2xl">No data found</p>
            </div>
         }
      </Slider>
    </div>
  );
}

export default CatagorySlider;
