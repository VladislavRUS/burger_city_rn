import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Text } from '../../../components/Text';
import { Colors } from '../../../constants/Colors';
import {
  ChargeWrapper,
  OrderWrapper,
  PriceWrapper,
  SummaryWrapper,
  TitleWrapper,
  TotalWrapper,
  Wrapper,
} from './Header.styles';

interface IHeaderProps {
  orderPrice: number;
  chargePrice: number;
}

const Header: React.FC<IHeaderProps & InjectedIntlProps> = ({
  orderPrice,
  chargePrice,
  intl,
}) => (
  <Wrapper>
    <TitleWrapper>
      <Text fontSize={20} fontWeight={700} color={'#fff'}>
        {intl.formatMessage({ id: 'order.reviewAndConfirm' })}
      </Text>
    </TitleWrapper>
    <SummaryWrapper>
      <Text fontSize={15} fontWeight={600} color={Colors.MAIN_COLOR}>
        {intl.formatMessage({ id: 'order.total' })}
      </Text>
    </SummaryWrapper>
    <OrderWrapper>
      <Text fontSize={15} fontWeight={600} color={Colors.MAIN_COLOR}>
        {intl.formatMessage({ id: 'order.subtotal' })}
      </Text>
      <PriceWrapper>
        <Text fontSize={15} fontWeight={600} color={'#fff'}>
          {orderPrice}$
        </Text>
      </PriceWrapper>
    </OrderWrapper>
    <ChargeWrapper>
      <Text fontSize={15} fontWeight={600} color={Colors.MAIN_COLOR}>
        {intl.formatMessage({ id: 'order.deliveryCharge' })}
      </Text>
      <PriceWrapper>
        <Text fontSize={15} fontWeight={600} color={'#fff'}>
          {chargePrice}$
        </Text>
      </PriceWrapper>
    </ChargeWrapper>
    <TotalWrapper>
      <Text fontSize={15} fontWeight={600} color={Colors.MAIN_COLOR}>
        Всего
      </Text>
      <PriceWrapper>
        <Text fontSize={20} fontWeight={700} color={'#fff'}>
          {orderPrice + chargePrice}$
        </Text>
      </PriceWrapper>
    </TotalWrapper>
  </Wrapper>
);

export default injectIntl(Header);
