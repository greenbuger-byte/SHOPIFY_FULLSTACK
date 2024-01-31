import React from 'react';

import { Loading } from '@/components/ui';
import CardWrapperBlock from '@/pages/main/blocks/card-wrapper.block';
import { useGetProductsQuery } from '@/store/api/product.api';

const MainPage = () => {
  const { data: productsFromServer = [], isLoading, isFetching } = useGetProductsQuery();
  if (isLoading || isFetching) return <Loading />;
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1200px]">
          <h1 className="font-[800] text-[30px] text-[#1e293b] my-[20px] mt-[40px] mx-[10px]">
            ХИТ НЕДЕЛИ
          </h1>
          <CardWrapperBlock products={productsFromServer} />
          <h1 className="font-[800] text-[30px] text-[#1e293b] my-[20px] mt-[40px] mx-[10px]">
            СКИДКИ
          </h1>
          <CardWrapperBlock products={productsFromServer} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
