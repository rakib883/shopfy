import { NextResponse } from "next/server"
import { product } from "../../../../product"

export const GET =()=>{
    const groceries = product.filter((item)=>item.category === "groceries")

    return NextResponse.json(groceries)
}