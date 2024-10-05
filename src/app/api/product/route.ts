import { NextResponse } from "next/server"
import { product } from "../../../../product"

export const GET = async(req,res)=>{
    try{
        return NextResponse.json(product)
    }catch(error){
        console.log(error)
    }
}