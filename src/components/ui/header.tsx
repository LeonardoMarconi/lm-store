import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header = () => {
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
                    <div className="mt-02 flex flex-col gap-2">
                        <Button variant="secondary" className="w-full justify-start gap-2">
                            <LogInIcon />
                            Fazer Login
                        </Button>

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