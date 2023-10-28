import { ShoppingBagIcon, ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import computeProductTotalPrice from "@/helpers/product";
import { Button } from "./button";
import Link from "next/link";
import { SheetClose } from "./sheet";
import { Separator } from "./separator";
import { ScrollArea, ScrollBar } from "./scroll-area";

const Cart = () => {
    const {products, total, subtotal, totalDiscount} = useContext(CartContext);
    return ( 
        <div className="flex h-full flex-col gap-8">
            <Badge className="w-fit gap-1 text-base uppercase border-primary border-2 px-3 py-[0.375rem]" variant="outline">
                <ShoppingCartIcon />
                Carrinho
            </Badge>
        <ScrollArea className="h-full gap-2 p-2 rounded-md border-3">
            {products.length === 0 &&(
                <div className="bg-accent h-full flex items-center mt-5 px-5 rounded-lg justify-between">
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
                <div className=" flex h-full flex-col gap-5 mt-2 mr-1">
                    <CartItem  key={product.id} product={computeProductTotalPrice(product as any) as any} />
                </div>
            ))}
            <ScrollBar className="bg-accent" />
        </ScrollArea>
        <div className="flex flex-col gap-3">
            <Separator className="bg-primary"/>
            <div className="flex items-center justify-between text-sm">
                <p>Subtotal</p>
                <p>{subtotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between text-sm">
                <p>Entrega</p>
                <p>Grátis</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between text-sm">
                <p>Descontos</p>
                <p>{totalDiscount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between text-lg font-bold">
                <p>Total</p>
                <p>{total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
            </div>
            <Button className="uppercase font-bold mt-7">
                Finalizar Compra
            </Button>
        </div>
        </div>
     );
}
 
export default Cart;