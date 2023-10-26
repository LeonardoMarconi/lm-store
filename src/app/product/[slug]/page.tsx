import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";
import computeProductTotalPrice from "@/helpers/product";
import ProductList from "@/components/ui/product-list";

interface ProductDetailsPageProps{
    params:{
        slug: string
    }
}

const ProductDetailsPage = async({params:{slug}}:ProductDetailsPageProps) => {

    const product = await prismaClient.product.findFirst({
        where:{
            slug: slug
        },
        include:{
            category:{
                include:{
                    products:{
                        where:{
                            slug:{
                                not: slug,
                            }
                        }
                    },
                }
            }
        }
    })

    if (!product) return null;

    return ( 
        <div className="flex flex-wrap justify-center gap-8 pb-8">
            <ProductImages imageUrls={product.imageUrls} name={product.name} />
            <ProductInfo product={computeProductTotalPrice(product)}/>
            <div className="flex flex-col mt-8 pb-8 w-full md:w-[70%]">
                <h1 className="font-bold uppercase p-5">Produtos Recomendados</h1>
                <ProductList products={product.category.products}/>
            </div>
        </div>
        
    );
}
 
export default ProductDetailsPage;