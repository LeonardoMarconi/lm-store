import { prismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY,{
    apiVersion: "2023-10-16",
})

export const POST = async (request: Request) => {
    const signature = request.headers.get('stripe-signature');

    if (!signature){
        return NextResponse.error();
    }

    const text = await request.text();

    const event = stripe.webhooks.constructEvent(
        text,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET_KEY
    );

    if(event.type === 'checkout.session.completed'){
        const session = event.data.object as any;

        const address = event.data.object.shipping_details?.address;

        await prismaClient.order.update({
            where:{
                id: session.metadata.orderId,
            },
            data:{
                status: 'PAYMENT_CONFIRMED',
            },
        });

        await prismaClient.orderAddressDelivery.create({
            data:{
                address: address?.line1 as string,
                district: address?.line2 as string,
                postalCode: address?.postal_code as string,
                city: address?.city as string,
                state: address?.state as string,
                orderId: session.metadata.orderId
            }
        });
        
    }
    return NextResponse.json({ received: true});
};
 