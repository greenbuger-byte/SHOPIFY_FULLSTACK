import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { serverRoutes } from '@/utils/server-routes';
import { Product } from '@/types/product.type';

const productApi = createApi({
  baseQuery: fetchBaseQuery(),
  reducerPath: 'productApi',
  tagTypes: ['PRODUCT'],
  endpoints: (build) => ({
    getProducts: build.query<Array<Product>, void | null>({
      query: () => ({
        url: serverRoutes.product,
      }),
      providesTags: ['PRODUCT'],
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
export default productApi;
