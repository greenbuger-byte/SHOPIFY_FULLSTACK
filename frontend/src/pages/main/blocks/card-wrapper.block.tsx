import React, { FC } from 'react';

import { Box, Card } from '@/components/ui';
import { Product } from '@/types/product.type';

const CardWrapperBlock: FC<{ products: Array<Product> }> = (props) => {
  const { products } = props;
  return (
    <Box className="bg-white">
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-3">
        {products.map((product) => (
          <div key={product.id}>
            <Card product={product} />
          </div>
        ))}
      </div>
    </Box>
  );
};

export default CardWrapperBlock;
