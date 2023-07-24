import type { NextPage } from 'next';

import { getProduct, getProducts } from '@/actions';

import { Gallery, Info, ProductList } from '@/components/blocks';
import { Container } from '@/components/ui';

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: NextPage<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const categoryId = product?.category?.id;

  const suggestedProducts = await getProducts({
    categoryId
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />

            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>

          <hr className="my-10" />

          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
