import React from 'react';

import { FastImageSource } from 'react-native-fast-image';
import { Text } from '../../../components/Text';
import { Colors } from '../../../constants/Colors';
import ProductOrder from '../../../models/ProductOrder';
import {
  Image,
  PriceWrapper,
  TextsWrapper,
  Wrapper,
} from './ProductOrderItem.styles';

interface IProductOrderItemProps {
  productOrder: ProductOrder;
}

const ProductOrderItem: React.FC<IProductOrderItemProps> = ({
  productOrder,
}) => (
  <Wrapper>
    <Image source={productOrder.product.imageUrl as FastImageSource} />
    <TextsWrapper>
      <Text fontSize={14} fontWeight={700}>
        {productOrder.quantity} {productOrder.product.keyName}
      </Text>
      <Text fontSize={14} fontWeight={600} color={Colors.DARK_ICON_COLOR}>
        {productOrder.product.keyName}
      </Text>
    </TextsWrapper>
    <PriceWrapper>
      <Text fontSize={14} fontWeight={700} color={Colors.MAIN_COLOR}>
        {productOrder.product.price}$
      </Text>
    </PriceWrapper>
  </Wrapper>
);

export default ProductOrderItem;
