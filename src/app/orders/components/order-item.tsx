import { Accordion, AccordionTrigger, AccordionItem, AccordionContent } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Prisma } from "@prisma/client";
import { format } from 'date-fns';
import OrderProductItem from "./order-product-item";
import { Separator } from "@/components/ui/separator";

interface OrdemItemProps{
    order: Prisma.OrderGetPayload<{
        include:{
            orderProducts: {
                include:{
                    product: true;
                }
            }
        },
    }>;
}

const OrderItens = ({order}:OrdemItemProps) => {
    return ( 
        <Card className="px-5">
            <Separator className="bg-primary"/>
            <Accordion type="single" className="w-full" collapsible>
                <AccordionItem value={order.id}>
                    <AccordionTrigger>
                        <div className="flex flex-col gap-1 text-left">
                            <p>{order.status === 'PAYMENT_CONFIRMED'? <span>✅</span>:<span>⛔</span>}
                               &nbsp; Pedido # {("0000" + order.numberOrder).slice(-6)} com {order.orderProducts.length} produto(s)</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <div className="font-bold">
                                    <p>Status</p>
                                    {order.status === 'PAYMENT_CONFIRMED'?(
                                        <p className="text-primary">Pago</p>
                                    ):(
                                        <p className="text-[red]">Aguardando Pagamento</p>
                                    )}
                                    
                                </div>
                                <div>
                                    <p className="font-bold">Data</p>
                                    <p className="opacity-60">{format(order.createdAt,'dd/MM/y')}</p>
                                </div>
                                <div>
                                    <p className="font-bold">Pagamento</p>
                                    <p className="opacity-60">Cartão</p>
                                </div>
                            </div>
                            {order.orderProducts.map(orderProduct => (
                                <OrderProductItem key={orderProduct.id} orderProduct={orderProduct} />
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </Card> 
    );
}
 
export default OrderItens;