import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import computeProductTotalPrice from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { Product } from "@prisma/client";
import {  PercentIcon } from "lucide-react";

interface ProductItemProps{
    params: Product
}

const SaleProducts = async({params}:ProductItemProps) => {
    const category = await prismaClient.product.findMany({
        where:{
            discountPercentage:{
                gt: 0,
              },
        },
        
    });
  
    return ( 
        <div className='flex flex-wrap gap-8 p-5'>
            
            <Badge className="w-fit gap-1 text-base uppercase border-primary border-2 px-3 py-[0.375rem]" variant="outline">
                <PercentIcon />
                Ofertas
            </Badge>
    
            <div className="flex flex-wrap justify-center w-full gap-5 p-5">
                {category.map(product =>
                <div key={product.id} className=" w-[170px] max-w-[170px]">
                    <ProductItem product={computeProductTotalPrice(product)} />
                </div>)}
            </div>
        </div>
     );
}
 
export default SaleProducts;