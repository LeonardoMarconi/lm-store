import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import computeProductTotalPrice from "@/helpers/product";

const Cart = () => {
    const {products} = useContext(CartContext);
    return ( 
        <div className="flex flex-col gap-8">
            <Badge className="w-fit gap-1 text-base uppercase border-primary border-2 px-3 py-[0.375rem]" variant="outline">
                <ShoppingCartIcon />
                Carrinho
            </Badge>
        {products.map((product) => (
            <div className=" flex flex-col gap-5">
                <CartItem  key={product.id} product={computeProductTotalPrice(product as any) as any} />
            </div>
        ))}
        </div>
     );
}
 
export default Cart;