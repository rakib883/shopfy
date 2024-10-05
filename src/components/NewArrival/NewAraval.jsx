import React from 'react'
import SwipeToSlide from './../../lib/SlickSlider/SlickSlider';
import { GetData } from '../../lib/GetData';
import Title from '../../components/ui/Title';

const NewAraval = async() => {
    const response = "http://localhost:3000/api/product"
    const productData = await GetData(response)
  return (
    <div>
        <div className="co">
            <div className="mx-20">
                <div className="title my-4">
                    <Title title="New Arrivals" />
                </div>
                <div className="slider">
                   <SwipeToSlide newAraval = {productData} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewAraval