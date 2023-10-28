import { CartContext, CartProduct } from "@/providers/cart";
import Image from "next/image";
import { Button } from "./button";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./alert-dialog";

interface CartItemProps{
    product: CartProduct;
}

const CartItem = ({product}:CartItemProps) => {
    const {decreaseProductQuantity, increaseProductQuantity, removeProduct} = useContext(CartContext);
    const handleDecreaseProductQuantity = () => {
        decreaseProductQuantity(product.id);
    }
    const handleIncreaseProductQuantity = () => {
        increaseProductQuantity(product.id);
    }
    const handleDeleteProductToCart = () => {
        removeProduct(product.id);
        
    }

    return ( 
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="bg-accent flex items-center justify-center rounded-lg h-[87px] w-[87px]">
                    <Image
                        src={product.imageUrls[0]} 
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt={product.name}
                        className="w-auto h-auto max-w-[80%] max-h-[70%]"
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-sm">{product.name}</p>
                    <div className="flex items-center gap-2">   
                        <p className="font-semibold text-sm">{product.totalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>                                    
                        {product.discountPercentage > 0 && (<p className="opacity-75 line-through text-xs">{Number(product.basePrice).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>)}
                    </div>
                    <div className="flex items-center gap-1">
                        <Button size="icon" variant="outline" className="h-6 w-6" onClick={handleDecreaseProductQuantity}>
                            <ArrowLeftIcon size={12}/>
                        </Button>
                        <span className="p-1">{product.quantity}</span>
                        <Button size="icon" variant="outline" className="h-6 w-6" onClick={handleIncreaseProductQuantity}>
                            <ArrowRightIcon size={12} />
                        </Button>
                    </div>
                </div>
            </div>
            <div>

            </div>
            <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button size="icon" variant="outline">
                    <TrashIcon size={16} />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Remover esse item do seu carrinho 😲?</AlertDialogTitle>
                <AlertDialogDescription>
                <div className="flex items-center gap-4">
                    <div className="bg-accent flex items-center justify-center rounded-lg h-[87px] w-[87px]">
                        <Image
                            src={product.imageUrls[0]} 
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt={product.name}
                            className="w-auto h-auto max-w-[80%] max-h-[70%]"
                        />
                    </div>
                    <div className="flex flex-col">
                    <p className="text-sm">{product.name}</p>
                    <div className="flex items-center gap-2">   
                        <p className="font-semibold text-sm">{product.totalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>                                    
                        {product.discountPercentage > 0 && (<p className="opacity-75 line-through text-xs">{Number(product.basePrice).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>)}
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="p-1"> Quantidade :{product.quantity}</span>
                    </div>
                    </div>
                </div>
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancelar 🥳</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteProductToCart}>Sim, tenho certeza 😞</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialog>
        </div>
     );
}
 
export default CartItem;