import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Product } from '@janettra-workspace/shared-types';
import { Code } from '@mantine/core';

export default function Products() {
  const products = useSelector(
    (state: { products: Product[]; isLoaded: boolean }) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_PRODUCTS' });
  }, [dispatch]);

  console.log(products);

  return (
    <Code>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </Code>
  );
}
