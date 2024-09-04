import { NextResponse } from "next/server"

export const GET =async()=>{
    return NextResponse.json({name:"this is dynamic route"})
}