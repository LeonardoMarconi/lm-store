"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useState } from "react";

interface ProductInfoProps{
    product: Pick<
        ProductWithTotalPrice,
        "basePrice"
        | "description"
        | "discountPercentage"
        | "totalPrice"
        | "name"
    >
}

const ProductInfo = ({product:{basePrice, totalPrice, description, discountPercentage, name}}:ProductInfoProps) => {

    const [quantity, setQuantity] = useState(1);

    const handleDecreaseQuantityClick = () =>{
        setQuantity((prev)=> (prev === 1 ? prev: prev - 1));
    }

    const handleIncrementalQuantityClick = () =>{
        setQuantity((prev)=>  prev + 1);
    }

    return ( 
        <div className="flex flex-col mt-1 p-5 md:w-[70%]">
            <p className="opacity-75 text-[12px] pt-2">Novo</p>
            <h2 className="text-lg ">{name}</h2>
            <p className="text-primary text-[12px] pb-2">Disponível em estoque</p>
            <div className="flex items-center gap-2">
                    {discountPercentage > 0 ? (
                        <>
                        <p className="font-semibold text-xl">{totalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                         
                        <Badge className="left-2 top-2 px-2 py-[2px]">
                            <ArrowDownIcon size={14} />{discountPercentage} %
                        </Badge>
                            
                        </>
                    ):(
                        <p className="font-semibold text-xl">{Number(basePrice).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                    )}
            </div>
            {discountPercentage > 0 && (<p className="opacity-75 line-through text-sm">{Number(basePrice).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>)}

            <div className="flex items-center py-5">
                <Button size="icon" variant="outline" onClick={handleDecreaseQuantityClick}>
                    <ArrowLeftIcon size={16}/>
                </Button>
                <span className="p-4">{quantity}</span>
                <Button size="icon" variant="outline" onClick={handleIncrementalQuantityClick}>
                    <ArrowRightIcon size={16} />
                </Button>
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="font-bold">Descrição</h3>
                <p className="opacity-60 text-sm text-justify">{description}</p>
            </div>
            <Button className="w-full bg-primary p-5 mt-8 uppercase font-bold">
                Adicionar o carrinho
            </Button>
            <div className="bg-accent flex items-center mt-5 px-5 rounded-lg justify-between">
                <div className="flex items-center gap-2 ">
                    <TruckIcon size={54}/>
                    <div className="flex flex-col p-5">
                        <p className="text-sm ">Entrega via <span className="font-bold">LMPacket®</span></p>
                        <p className="text-sm text-primary ">Envio para <span className="font-bold">todo o Brasil</span></p>
                    </div>
                </div>
                <p className="text-sm text-bold">Frete Grátis</p>
            </div>
        </div>
     );
}
 
export default ProductInfo;