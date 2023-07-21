import type { NextPage } from 'next';

import { getBillboard, getProducts } from '@/actions';

import { Billboard, Container, ProductList } from '@/common/ui';

export const revalidate = 0;

const Home: NextPage = async () => {
  const billboard = await getBillboard('01e39f5d-6b8a-4373-8a48-893989745119');
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
