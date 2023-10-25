import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import { HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, SpeakerIcon, SquareIcon } from "lucide-react";
import Link from "next/link";

interface CategoryItemProps{
    category: Category
}

const CategoryItem = ({category}: CategoryItemProps) => {
    const categoryIcon = {
        keyboards: <KeyboardIcon />,
        monitors: <MonitorIcon />,
        headphones: <HeadphonesIcon />,
        mousepads: <SquareIcon />,
        speakers: <SpeakerIcon />,
        mouses: <MouseIcon />
    }

    return (
        <Link href={`/category/${category.slug}`}>
            <Badge variant="secondary" className="py-3 flex justify-center items-center gap-2 rounded-lg">
                {categoryIcon[category.slug as keyof typeof categoryIcon]}
                <span className="font-bold text-xs">{category.name}</span>
            </Badge>
        </Link>
     );
}
 
export default CategoryItem;