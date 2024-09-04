import { NextResponse } from 'next/server';
import { product } from '../../../../product'; // Ensure the path to the product file is correct

export async function GET() {
  // Filter products based on the category
  const userData = product.filter(item => item.category === 'beauty');

  // Return a JSON response with the filtered data
  return NextResponse.json(userData);
}