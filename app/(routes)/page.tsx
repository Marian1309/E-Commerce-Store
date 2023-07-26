import type { NextPage } from 'next';

import { getProducts } from '@/actions';

import { ProductList } from '@/components/blocks';
import { Billboard, Container } from '@/components/ui';

export const revalidate = 60;

const Home: NextPage = async () => {
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-2 pb-10">
        <Billboard
          data={{
            id: '1',
            imageUrl: '/images/bg.jpg',
            label: 'Explore The Special Collection!'
          }}
        />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
