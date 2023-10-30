import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return ( 
        <div className='flex flex-wrap gap-8 p-5'>
            
            <Badge className="w-fit gap-1 text-base uppercase border-primary border-2 px-3 py-[0.375rem]" variant="outline">
                <Skeleton className="flex h-[40px] w-[100px] rounded-full bg-accent" />
            </Badge>
    
            <div className="flex flex-wrap justify-center w-full gap-5 p-5">
            {[...Array(7)].map((x, i) => (
                    <Skeleton
                        className="flex aspect-square h-[170px] w-[170px] items-center justify-center rounded-lg bg-accent"
                        key={i}
                    />
            ))}

            </div>
        </div>
     );
}
 
export default Loading;