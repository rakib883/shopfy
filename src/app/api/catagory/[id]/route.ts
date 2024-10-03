import { NextResponse } from "next/server";
import { product } from "../../../../../product";

export const GET = async (req, { params }) => {
       try{
          const id = params?.id
          const catagoryProduct = product.filter((item)=>item?.category === id)
          if(catagoryProduct.length === 0){
             return NextResponse.json({message:"Data not found"})
          }
          console.log("filter data heare",catagoryProduct)
         return NextResponse.json(catagoryProduct)
       }catch(error){
        console.log(error)
       }
  };
  