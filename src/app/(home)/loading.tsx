import Banner from "@/components/ui/banner";
import Categories from "./components/categories";
import { Skeleton } from "@/components/ui/skeleton";
import BannerCard from "@/components/ui/banner-card";

const Loading = () => {
    return ( 
        <div className='flex flex-col gap-8 py-8'>
      <div className='sm:grid grid-cols-2'>
        <div className="px-5">
          <Banner />
        </div>
        <div className="mt-8 px-5">
          <Categories />
        </div>
      </div>
      <div className='mt-8 px-5'>
        <h1 className='font-bold text-base'>OFERTAS</h1>
      </div>
      <div className='mt-[-25px] w-full'>
        <div className="flex w-full gap-4 overflow-x-auto p-5 [&::-webkit-scrollbar]:hidden">
            {[...Array(7)].map((x, i) => (
                    <Skeleton
                        className="flex aspect-square h-[170px] w-[170px] items-center justify-center rounded-lg bg-accent"
                        key={i}
                    />
            ))}
        </div>
        <div className="flex w-full gap-4 overflow-x-auto p-5 [&::-webkit-scrollbar]:hidden">
            {[...Array(7)].map((x, i) => (
                    <Skeleton key={i} className="h-4 bg-accent w-[170px]" />
            ))}
            {[...Array(7)].map((x, i) => (
                    <Skeleton key={i} className="h-4 bg-accent w-[170px]" />
            ))}
        </div>
      </div>
      <div className="sm:grid grid-flow-col auto-cols-max w-full">
        <div className='mt-[-25px] w-full'>
          <div className='mt-8 px-5'>
            <h1 className='font-bold text-base'>TECLADOS</h1>
          </div>
          <div className="flex w-full gap-4 overflow-x-auto p-5 [&::-webkit-scrollbar]:hidden">
            {[...Array(7)].map((x, i) => (
                    <Skeleton
                        className="flex aspect-square h-[170px] w-[170px] items-center justify-center rounded-lg bg-accent"
                        key={i}
                    />
            ))}
        </div>
        <div className="flex w-full gap-4 overflow-x-auto p-5 [&::-webkit-scrollbar]:hidden">
            {[...Array(7)].map((x, i) => (
                    <Skeleton key={i} className="h-4 bg-accent w-[170px]" />
            ))}
            {[...Array(7)].map((x, i) => (
                    <Skeleton key={i} className="h-4 bg-accent w-[170px]" />
            ))}
        </div>
        </div>
        <div className="md:w-[370px] px-5 ">
          <BannerCard />
        </div>
      </div>
      <div className="sm:grid grid-flow-col auto-cols-max w-full mb-8">
        <div className="md:w-[370px] sm:flex hidden px-5 ">
          <BannerCard />
        </div>
        <div className='mt-[-25px] w-full'>
          <div className='mt-8 px-5'>
            <h1 className='font-bold text-base'>MOUSEPADS</h1>
          </div>
          <div className="flex w-full gap-4 overflow-x-auto p-5 [&::-webkit-scrollbar]:hidden">
            {[...Array(7)].map((x, i) => (
                    <Skeleton
                        className="flex aspect-square h-[170px] w-[170px] items-center justify-center rounded-lg bg-accent"
                        key={i}
                    />
            ))}
        </div>
        <div className="flex w-full gap-4 overflow-x-auto p-5 [&::-webkit-scrollbar]:hidden">
            {[...Array(7)].map((x, i) => (
                    <Skeleton key={i} className="h-4 bg-accent w-[170px]" />
            ))}
            {[...Array(7)].map((x, i) => (
                    <Skeleton key={i} className="h-4 bg-accent w-[170px]" />
            ))}
        </div>
        </div>
        
      </div>
      
    </div>
     );
}
 
export default Loading;