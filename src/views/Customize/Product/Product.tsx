import React from 'react';
import { FastImageSource } from 'react-native-fast-image';
import { InfoPanel } from '../../../components/InfoPanel';
import { InfoPanelLook } from '../../../components/InfoPanel/InfoPanel';
import { Text } from '../../../components/Text';
import ProductModel from '../../../models/Product';
import { Image, Wrapper } from './Product.styles';

interface IProductProps {
  product: ProductModel;
}

const Product: React.FC<IProductProps> = ({ product }) => (
  <Wrapper>
    <InfoPanel look={InfoPanelLook.PADDED}>
      <Image source={product.imageUrl as FastImageSource} />
      <Text>{product.keyName}</Text>
    </InfoPanel>
  </Wrapper>
);

export default Product;
