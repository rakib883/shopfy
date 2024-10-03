import { NextResponse } from "next/server";
import { product } from "../../../../../product";



export const GET = async (req,{params}) => {
    try {
       const {id} = params
       const singleProduct = product.find((item)=>String(item?.id) === id)
       return NextResponse.json(singleProduct)
    } catch (error) {
      console.error("Error fetching product:", error);
      return new Response("Failed to fetch product", { status: 500 });
    }
  };
  