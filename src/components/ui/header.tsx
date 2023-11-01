"use client";

import { HomeIcon, ListOrderedIcon, LogInIcon, LogOutIcon, MenuIcon, PackageSearchIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Cart from "./cart";
import { CartContext } from "@/providers/cart";
import { Badge } from "./badge";

const Header = () => {

    const {status, data} = useSession();
    const {products} = useContext(CartContext);

    const handleLoginClick = async() => {
        await signIn();
    }
    const handleLogoutClick = async() => {
        await signOut();
    }
    
    const [saudacao, setSaudacao] = useState('');

    useEffect(()=>{
  
      function getSaudacao(){
    
        let dataHora = new Date();
        let xHora = dataHora.getHours();
    
        if (xHora >= 0 && xHora <12) {setSaudacao('Bom Dia, ')}
        if (xHora >= 12 && xHora < 18) {setSaudacao('Boa Tarde, ')}
        if (xHora >= 18 && xHora <= 23) {setSaudacao('Boa Noite, ')}
    
      }
      getSaudacao();
    
    },[])

    return ( 
        <Card className="flex justify-between p-[1.875rem]">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader className="text-left text-lg font-semibold mb-5">
                        Menu
                    </SheetHeader>

                        {status === 'authenticated' && data?.user && (
                        <div className="flex flex-col">
                                <div className="flex items-center gap-2 py-4">
                                    <Avatar>
                                        <AvatarFallback>
                                            {data.user.name?.[0].toUpperCase()}
                                        </AvatarFallback>
                                        {data.user.image && <AvatarImage src={data.user.image}/>}
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <p className="font-medium">{data.user.name}</p>
                                        <p className="text-sm opacity-75" >{saudacao} boas compras 🛍️🛒</p>
                                    </div>
                                </div>
                            <Separator />
                        </div>
                        )}

                    <div className="mt-04 flex flex-col gap-2">
                        {status === 'unauthenticated' &&(
                            <Button onClick={handleLoginClick} variant="secondary" className="w-full justify-start gap-2">
                                <LogInIcon />
                                Fazer Login
                            </Button>
                        )}

                        {status === 'authenticated' &&(
                            <Button onClick={handleLogoutClick} variant="secondary" className="w-full justify-start gap-2">
                                <LogOutIcon />
                                Fazer Logout
                            </Button>
                        )}

                        <SheetClose asChild>
                            <Link href="/">
                                <Button variant="secondary" className="w-full justify-start gap-2">
                                    <HomeIcon />
                                    Inicio
                                </Button>
                            </Link>
                        </SheetClose>

                        {status === 'authenticated' &&(
                        <SheetClose asChild>
                            <Link href="/orders">
                                <Button variant="secondary" className="w-full justify-start gap-2">
                                    <PackageSearchIcon />
                                    Meus Pedidos
                                </Button>
                            </Link>
                        </SheetClose>
                        )}

                        <SheetClose asChild>
                            <Link href="/category/sales">
                                <Button variant="secondary" className="w-full justify-start gap-2">
                                    <PercentIcon />
                                    Ofertas
                                </Button>
                            </Link>
                        </SheetClose>

                        <SheetClose asChild>
                            <Link href="/catalog">
                                <Button variant="secondary" className="w-full justify-start gap-2">
                                    <ListOrderedIcon />
                                    Catálogo
                                </Button>
                            </Link>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>

            <Link href={'/'}>
                <h1 className="font-semibold text-lg">
                    <span className="text-primary">LM</span> Store
                </h1>
            </Link>

            <Sheet>
                <SheetTrigger asChild>
                    <Button  className="relative flex flex-row justify-center p-2" size="icon" variant="outline">
                        <ShoppingCartIcon />
                            {products.length != 0 && (
                                <Badge className="absolute bg-destructive hover:bg-destructive right-[-12px] top-[-12px] px-2 py-[2px]">
                                    {products.length}
                                </Badge>
                            )}
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <Cart />
                </SheetContent>
            </Sheet>
        </Card>
    );
}
 
export default Header;