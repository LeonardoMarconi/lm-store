import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { PackageSearchIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import OrderItem from "./components/order-item";

async function OrderPage(){
    const user = getServerSession(authOptions);

    if(!user){
        return <p>Acesso restrito</p>;
    }

    const orders = await prismaClient.order.findMany({
        where:{
            userId: (user as any).id,
        },
        include:{
            orderProducts: {
                include: {
                    product: true,
                }
            }
        },
    })

    return ( 
        <div className="p-5">
            <Badge className="w-fit gap-1 text-base uppercase border-primary border-2 px-3 py-[0.375rem]" variant="outline">
                <PackageSearchIcon />
                Meus Pedidos
            </Badge>
            <div className="flex flex-col p-5 w-full items-center justify-center">
                <div className="flex w-full flex-col gap-5 md:w-[60%]">
                    {orders.map(order => (
                        <OrderItem key={order.id} order={order} />
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default OrderPage;