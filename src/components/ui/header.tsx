"use client";

import { HomeIcon, ListOrderedIcon, LogInIcon, LogOutIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "@radix-ui/react-separator";

const Header = () => {

    const {status, data} = useSession();
    const handleLoginClick = async() => {
        await signIn();
    }
    const handleLogoutClick = async() => {
        await signOut();
    }
      

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
                                        <p className="text-sm opacity-75" >Boas Compras 🛍️🛒</p>
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

                        <Button variant="secondary" className="w-full justify-start gap-2">
                            <HomeIcon />
                            Inicio
                        </Button>

                        <Button variant="secondary" className="w-full justify-start gap-2">
                            <PercentIcon />
                            Ofertas
                        </Button>

                        <Button variant="secondary" className="w-full justify-start gap-2">
                            <ListOrderedIcon />
                            Catálogo
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>

            <h1 className="font-semibold text-lg">
                <span className="text-primary">LM</span> Store
            </h1>

            <Button size="icon" variant="outline">
                <ShoppingCartIcon />
            </Button>
        </Card>
    );
}
 
export default Header;