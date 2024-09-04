import { NextResponse } from "next/server";
import { product } from "../../../../product";

export  const GET = async()=> {
  // Create a NextResponse object
  const response = NextResponse.json(product);

  // Return the response
  return response;
}
