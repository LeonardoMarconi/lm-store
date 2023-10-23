import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Product{
    totalPrice: number;
}

const computeProductTotalPrice = (product: Product): ProductWithTotalPrice => {
    if(product.discountPercentage === 0){
        return{
            ...product,
            totalPrice: Number(product.basePrice),
        };
    }

    const PriceDiscount = Number(product.basePrice)*(product.discountPercentage/100);
    const totalPrice = Number(product.basePrice) - PriceDiscount;

    return{
        ...product,
        totalPrice,
    }

};
 
export default computeProductTotalPrice;