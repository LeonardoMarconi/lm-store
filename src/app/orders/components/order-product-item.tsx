import computeProductTotalPrice from "@/helpers/product";
import { Prisma } from "@prisma/client";
import Image from "next/image";

interface OrderProductItemProps{
    orderProduct: Prisma.OrderProductGetPayload<{
        include:{
            product:true;
        }
    }>
}

const OrderProductItem = ({orderProduct}: OrderProductItemProps) => {
    const productWithTotalPrice = computeProductTotalPrice(orderProduct.product);

    return ( 
        <div className="flex items-center gap-4">
            <div className="bg-accent rounded-lg w-[77px] h-[77px] flex items-center justify-center">
                <Image
                    src={orderProduct.product.imageUrls[0]}
                    alt={orderProduct.product.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto max-w-[70%] h-auto max-h-[80%] object-contain"
                />
            </div>
            <div className="flex flex-col gap-1 w-full">
                <div className="flex bg-accent px-3 py-1 rounded-lg">
                        <p className="text-[12px]">Vendido e entregue por: <span className="font-bold">LM Store</span></p>
                </div>
                <p className="text-sm">{orderProduct.product.name}</p>
                <div className="flex w-full items-center justify-between gap-2">   
                   <div className="flex items-center gap-1">
                        <p className="font-semibold text-sm">{productWithTotalPrice.totalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>                                    
                        {orderProduct.discountPercentage > 0 && (<p className="opacity-75 line-through text-xs">{Number(orderProduct.basePrice).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>)}
                   </div>
                   <p className="p-1 opacity-60"> Quantidade :{orderProduct.quantity}</p>
                </div>
            </div>
        </div>
     );
}
 
export default OrderProductItem;