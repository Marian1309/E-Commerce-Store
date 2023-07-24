import type { NextPage } from 'next';

import { getBillboard, getProducts } from '@/actions';

import { ProductList } from '@/components/blocks';
import { Billboard, Container } from '@/components/ui';

export const revalidate = 0;

const Home: NextPage = async () => {
  const billboard = await getBillboard();
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-2 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
