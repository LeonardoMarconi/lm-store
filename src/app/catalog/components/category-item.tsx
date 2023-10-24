import Image from "next/image";
import { Category } from "@prisma/client";


interface CategoryItemProps{
    category: Category
}

const CategoryItem = ({category}:CategoryItemProps) => {
    return ( 
    <div className="flex flex-col ">
        <div className="relative bg-accent rounded-t-lg h-[170px] w-full flex justify-center items-center bg-gradient-to-t from-primary to-secondary">
            <Image 
                src={category.imageUrl}
                height={0}
                width={0}
                sizes="100vm"
                className="h-[80%] w-[70%]"
                style={{
                    objectFit:"contain",
                }}
                alt={category.name}
            />
        </div>

        <div className="flex flex-col gap-1 bg-primary justify-center items-center rounded-b-lg">
            <p className="text-sm p-3 font-bold">{category.name}</p>
        </div>
    </div>
    );
}
 
export default CategoryItem;