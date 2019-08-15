import React from 'react';
import { FastImageSource } from 'react-native-fast-image';
import { Text } from '../../../components/Text';
import ProductModel from '../../../models/Product';
import { Image, Wrapper } from './Product.styles';

interface IProductProps {
  product: ProductModel;
}

const Product: React.FC<IProductProps> = ({ product }) => (
  <Wrapper>
    <Image source={product.imageUrl as FastImageSource} />
    <Text>{product.keyName}</Text>
  </Wrapper>
);

export default Product;
