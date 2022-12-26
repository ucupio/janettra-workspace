import { Box, Container, Text } from '@mantine/core';
import React from 'react';
import { InfoCard } from '../components/card/InfoCard';

export default function Dashboard() {
  return (
    <Container>
      <Text my={'sm'} size={'xl'}>
        Dashboard
      </Text>
      <Box sx={{ display: 'grid' }}>
        <InfoCard
          title={'Order Completion'}
          completed={100}
          total={150}
          stats={[]}
        />
        <InfoCard
          title={'Stock Products'}
          completed={150}
          total={250}
          stats={[]}
        />
      </Box>
    </Container>
  );
}
