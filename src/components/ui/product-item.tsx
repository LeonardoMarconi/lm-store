import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";
import Link from "next/link";

interface ProductItemProps{
    product: ProductWithTotalPrice;
}

const ProductItem = ({product}:ProductItemProps) => {
    return ( 
    <Link href={`/product/${product.slug}`}>
        <div className="flex flex-col gap-4 ">
            <div className="relative bg-accent rounded-lg h-[170px] w-[170px] flex justify-center items-center">
                <Image 
                    src={product.imageUrls[0]}
                    height={0}
                    width={0}
                    sizes="100vm"
                    className="h-auto w-auto max-w-[80%] max-h-[70%]"
                    style={{
                        objectFit:"contain",
                    }}
                    alt={product.name}
                />
                {product.discountPercentage > 0 && (
                <Badge className="absolute left-2 top-2 px-2 pý-[2px]">
                    <ArrowDownIcon size={14} />{product.discountPercentage} %
                </Badge>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">{product.name}</p>
                <div className="flex items-center gap-2">
                    {product.discountPercentage > 0 ? (
                        <>
                        <p className="font-semibold">{product.totalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                        <p className="opacity-75 line-through text-[11px]">{Number(product.basePrice).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                        </>
                    ):(
                        <p className="font-semibold">{Number(product.basePrice).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                    )}
                    
                </div>
            </div>
        </div>
    </Link>
    );
}
 
export default ProductItem;