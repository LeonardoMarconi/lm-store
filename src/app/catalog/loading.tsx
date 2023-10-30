import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ShapesIcon } from "lucide-react";

const Loading = () => {
    return ( 
        <div className="flex flex-wrap gap-8 p-5">
            <Badge className="w-fit gap-1 text-base uppercase border-primary border-2 px-3 py-[0.375rem]" variant="outline">
                <ShapesIcon size={16} />
                Catálogo
            </Badge>
            <div className="sm:flex justify-center items-center w-full gap-y-2 gap-x-4 ">
            {[...Array(7)].map((x, i) => (
                    <Skeleton
                        className="flex aspect-square h-[190px] w-[170px] items-center justify-center rounded-lg bg-accent"
                        key={i}
                    />
            ))}
            </div>
        </div>
     );
}
 
export default Loading;