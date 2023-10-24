import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import CategoryList from "./components/categoty-list";

const CatalogPage = async() => {

    const categories = await prismaClient.category.findMany({});

    return ( 
        <div className="flex flex-col gap-8 p-5">
            <Badge className="w-fit gap-1 text-base uppercase border-primary border-2 px-3 py-[0.375rem]" variant="outline">
                <ShapesIcon size={16} />
                Catálogo
            </Badge>
            <div className="flex justify-center items-center w-full gap-y-2 gap-x-4 ">
                <CategoryList categories={categories}/>
            </div>
        </div>
     );
}
 
export default CatalogPage;