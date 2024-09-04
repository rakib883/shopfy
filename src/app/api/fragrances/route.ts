import { NextResponse } from 'next/server';
import { product } from '../../../../product';

export const GET=async()=>{
    
     const fragrances = product.filter((item)=>item.category === "fragrances")

     return NextResponse.json(fragrances)

}