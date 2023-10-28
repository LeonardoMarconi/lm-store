import { PercentIcon, ShoppingBagIcon, ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import computeProductTotalPrice from "@/helpers/product";
import { Button } from "./button";
import Link from "next/link";
import { SheetClose } from "./sheet";

const Cart = () => {
    const {products} = useContext(CartContext);
    return ( 
        <div className="flex flex-col gap-8">
            <Badge className="w-fit gap-1 text-base uppercase border-primary border-2 px-3 py-[0.375rem]" variant="outline">
                <ShoppingCartIcon />
                Carrinho
            </Badge>
        {products.length === 0 &&(
            <div className="bg-accent flex items-center mt-5 px-5 rounded-lg justify-between">
                <div className="flex items-center gap-2 ">
                    <ShoppingBagIcon size={54}/>
                    <div className="flex flex-col p-5">
                        <p className="text-sm ">Seu carrinho está <span className="font-bold">vazio 😲</span></p>
                    </div>
                </div>
                <Link href={'/category/sales'}>
                    <SheetClose asChild>
                        <Button className="bg-primary p-6" size="sm" variant="outline">
                            Ver Ofertas
                        </Button>
                    </SheetClose>
                </Link>
            </div>
        )}
        {products.map((product) => (
            <div className=" flex flex-col gap-5">
                <CartItem  key={product.id} product={computeProductTotalPrice(product as any) as any} />
            </div>
        ))}
        </div>
     );
}
 
export default Cart;