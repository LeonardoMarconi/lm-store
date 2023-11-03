import { getServerSession } from "next-auth";
import { PackageSearchIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import OrderItem from "./components/order-item";
import { authOptions } from "@/lib/auth";

async function OrderPage(){
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return (
        <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
            <h2 className="font-bold">Acesso Negado!</h2>
            <p className="text-sm opacity-60">Faça login para ver seus pedidos</p>
        </div>
        );
    }

    const orders = await prismaClient.order.findMany({
        where:{
            userId: session.user.id,
        },
        include:{
            orderAddressDelivery:true,
            orderProducts: {
                include: {
                    product: true,
                }
            },
            
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