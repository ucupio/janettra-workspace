import { StoreObject } from '@janettra-workspace/shared-types';
import {
  AspectRatio,
  Box,
  Image,
  Center,
  Stack,
  Heading,
  Text,
  HStack,
  Button,
} from 'native-base';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function JCardProducts() {
  const products = useSelector((state: StoreObject) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_PRODUCTS' });
  }, [dispatch]);
  return (
    <>
      {products.map((product) => {
        return (
          <Box alignItems="center" width={200} mx={'4'}>
            <Box
              maxW="80"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: 'coolGray.600',
                backgroundColor: 'gray.700',
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: 'gray.50',
              }}
            >
              <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image
                    source={{
                      uri: product?.image,
                    }}
                    alt="image"
                  />
                </AspectRatio>
                <Center
                  bg="violet.500"
                  _dark={{
                    bg: 'violet.400',
                  }}
                  _text={{
                    color: 'warmGray.50',
                    fontWeight: '700',
                    fontSize: 'xs',
                  }}
                  position="absolute"
                  bottom="0"
                  px="3"
                  py="1.5"
                >
                  Disc 20%
                </Center>
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                    {product.productname}
                  </Heading>
                </Stack>
                <Text fontWeight="400">{product.description}</Text>
                <HStack
                  alignItems="center"
                  space={4}
                  justifyContent="space-between"
                >
                  <Button size={'sm'}>Buy Now</Button>
                  <Button size={'sm'}>Add to Cart</Button>
                </HStack>
              </Stack>
            </Box>
          </Box>
        );
      })}
    </>
  );
}

export default JCardProducts;
