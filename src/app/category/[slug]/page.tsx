import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import computeProductTotalPrice from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { Product } from "@prisma/client";
import { HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, ShapesIcon, SpeakerIcon, SquareIcon } from "lucide-react";

interface ProductItemProps{
    params: Product
}

const CategoryProducts = async({params}:ProductItemProps) => {

    const category = await prismaClient.category.findFirst({
        where:{
            slug: params.slug 
        },
        include:{
            products: true,
        }
      });
    
    if (!category){
        return null;
    }
    
    const categoryIcon = {
        keyboards: <KeyboardIcon />,
        monitors: <MonitorIcon />,
        headphones: <HeadphonesIcon />,
        mousepads: <SquareIcon />,
        speakers: <SpeakerIcon />,
        mouses: <MouseIcon />
    }

    return ( 
        <div className='flex flex-col gap-8 p-5'>
            
            <Badge className="w-fit gap-1 text-base uppercase border-primary border-2 px-3 py-[0.375rem]" variant="outline">
                {categoryIcon[params.slug as keyof typeof categoryIcon]}
                {category.name}
            </Badge>
    
            <div className='grid grid-cols-2 gap-8'>
                {category.products.map(product =><ProductItem key={product.id} product={computeProductTotalPrice(product)} />)}
            </div>
        </div>
     );
}
 
export default CategoryProducts;