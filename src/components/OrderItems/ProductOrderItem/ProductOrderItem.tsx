import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
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

const ProductOrderItem: React.FC<
  IProductOrderItemProps & InjectedIntlProps
> = ({ productOrder, intl }) => (
  <Wrapper>
    <Image source={productOrder.product.imageUrl as FastImageSource} />
    <TextsWrapper>
      <Text fontSize={14} fontWeight={700} numberOfLines={2}>
        {productOrder.quantity}{' '}
        {intl.formatMessage({ id: productOrder.product.keyName })}
      </Text>
      <Text fontSize={14} fontWeight={600} color={Colors.DARK_ICON_COLOR}>
        {intl.formatMessage({ id: productOrder.product.keyName })}
      </Text>
    </TextsWrapper>
    <PriceWrapper>
      <Text fontSize={14} fontWeight={700} color={Colors.MAIN_COLOR}>
        {productOrder.product.price}$
      </Text>
    </PriceWrapper>
  </Wrapper>
);

export default injectIntl(ProductOrderItem);
