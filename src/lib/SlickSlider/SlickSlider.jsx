"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../../components/ui/Card";


function SwipeToSlide({newAraval}) {
    var settings = {
        infinite: true,
        speed: 300,
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
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      };

 
  return (
    <div className="slider-container"> {/* Add padding around the slider */}
    <Slider {...settings} className="flex">
      {newAraval.map((item) => {
        const { id } = item;
        return (
          <div key={id} className="px-2"> {/* Add horizontal padding to each slide */}
            <Card  item={item} />
          </div>
        );
      })}
    </Slider>
  </div>
  );
}

export default SwipeToSlide;
