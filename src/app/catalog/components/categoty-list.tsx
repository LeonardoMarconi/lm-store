import { Category } from "@prisma/client";
import CategoryItem from "./category-item";

interface CategoryListProps{
    categories: Category[]
}

const CategoryList = ({categories}: CategoryListProps) => {
    return (
        <div className="flex flex-wrap justify-center w-full gap-4 overflow-x-auto p-5 ">
            {categories.map(category =><CategoryItem key={category.id} category={category} />)}
        </div>
     );
}
 
export default CategoryList;