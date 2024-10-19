import { NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (request) => {
  const stripe = new Stripe(process.env.STRIPE_SECRECT!);  // Fixed the typo here

  try {
    const product = await request.json();
    const { item, email } = product;

    // Constructing the line_items array for Stripe Checkout
    const productItem = item.map((itemData) => ({
      quantity: itemData?.quantity,
      price_data: {
        currency: "usd",
        unit_amount: Math.round(itemData.price * 100),
        product_data: {
          name: itemData.name,
          images: [itemData?.image], // images should be an array
        },
      },
    }));

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:productItem,
        mode:"payment",
        success_url:`http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url:"http://localhost:3000/success",
        metadata:{
            email
        }
    })
    
    console.log(session)

    return NextResponse.json({id:session.id});
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
};
