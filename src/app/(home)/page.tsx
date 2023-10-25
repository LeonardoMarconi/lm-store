import Categories from './components/categories';
import { prismaClient } from '@/lib/prisma';
import Banner from '@/components/ui/banner';
import ProductList from './components/product-list';
import BannerCard from '@/components/ui/banner-card';

export default async function Home() {

  const deals = await prismaClient.product.findMany({
    where:{
      discountPercentage:{
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where:{
      discountPercentage:{
        gt: 0,
      },
      category: {
        slug: "keyboards"
      }
    },
  });

  const mouses = await prismaClient.product.findMany({
    where:{
      discountPercentage:{
        gt: 0,
      },
      category: {
        slug: "mouses"
      }
    },
  });
 
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
      <div className='mt-[-25px]'>
        <ProductList products={deals} />
      </div>
      <div className="sm:grid grid-cols-2">
        <div className='mt-[-25px]'>
          <div className='mt-8 px-5'>
            <h1 className='font-bold text-base'>TECLADOS</h1>
          </div>
          <ProductList products={keyboards} />
        </div>
        <div className="mt-8 px-5 w-full ">
          <BannerCard />
        </div>
      </div>
      <div className="sm:grid grid-cols-2">
        <div className="mt-8 px-5 w-full ">
          <BannerCard />
        </div>
        <div className='mt-[-25px]'>
          <div className='mt-8 px-5'>
            <h1 className='font-bold text-base'>MOUSES</h1>
          </div>
          <ProductList products={mouses} />
        </div>
      </div>

    </div>
  )
}
