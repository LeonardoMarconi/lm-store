"use server";

import { authOptions } from "@/lib/auth";
import { CartProduct } from "@/providers/cart";
import { getServerSession } from "next-auth/next";
import Stripe from 'stripe';

export const createCheckout = async (products: CartProduct[], orderId: string) => {

    const data = await getServerSession(authOptions);
    
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY,{
        apiVersion: "2023-10-16",
    });

    const checkout = await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        mode:'payment',
        success_url:'http://localhost:3000/orders',
        cancel_url:'http://localhost:3000/orders',
        metadata:{
            orderId,
        },
        customer_email: (String(data?.user?.email)),
        billing_address_collection: 'auto',
        shipping_address_collection: {
            allowed_countries: ['BR'],
        },
        line_items:products.map(product => {
            return{
                price_data:{
                    currency:'brl',
                    product_data:{
                        name: product.name,
                        description: product.description,
                        images: product.imageUrls,
                    },
                    unit_amount: product.totalPrice * 100,
                },
                quantity: product.quantity,
            }
        }),
    });

    return checkout;

}
