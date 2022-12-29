import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Product } from '@janettra-workspace/shared-types';
import { Container, Title } from '@mantine/core';
import { DataTable } from '../components/table/DataTable';

export default function Products() {
  const { products } = useSelector(
    (state: { products: Product[]; isLoaded: boolean }) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_PRODUCTS' });
  }, [dispatch]);

  console.log(products);

  return (
    <Container>
      <Title size={'xl'} order={3}>
        Product List
      </Title>
      <DataTable<Product> data={products} path={'products'} />
    </Container>
  );
}
