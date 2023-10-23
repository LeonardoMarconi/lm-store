import Categories from './components/categories';
import { prismaClient } from '@/lib/prisma';
import Banner from '@/components/ui/banner';
import ProductList from './components/product-list';

export default async function Home() {

  const deals = await prismaClient.product.findMany({
    where:{
      discountPercentage:{
        gt: 0,
      },
    },
  });
 
  return (
    <div>
      <div className="px-5">
        <Banner />
      </div>
      <div className="mt-8 px-5">
        <Categories />
      </div>
      <div className='mt-8'>
        <ProductList products={deals} />
      </div>

    </div>
  )
}
