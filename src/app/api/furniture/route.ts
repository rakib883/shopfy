import { product } from "../../../../product"
import { NextResponse } from 'next/server';

export const GET =async()=>{
    const furniture = product.filter((item)=>item?.category === "furniture")

    return NextResponse.json(furniture)
}