import React from 'react';
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

const Header: React.FC<IHeaderProps> = ({ orderPrice, chargePrice }) => (
  <Wrapper>
    <TitleWrapper>
      <Text fontSize={20} fontWeight={700} color={'#fff'}>
        Подтверждение заказа
      </Text>
    </TitleWrapper>
    <SummaryWrapper>
      <Text fontSize={15} fontWeight={600} color={Colors.MAIN_COLOR}>
        Всего
      </Text>
    </SummaryWrapper>
    <OrderWrapper>
      <Text fontSize={15} fontWeight={600} color={Colors.MAIN_COLOR}>
        Заказ
      </Text>
      <PriceWrapper>
        <Text fontSize={15} fontWeight={600} color={'#fff'}>
          {orderPrice}$
        </Text>
      </PriceWrapper>
    </OrderWrapper>
    <ChargeWrapper>
      <Text fontSize={15} fontWeight={600} color={Colors.MAIN_COLOR}>
        Плата за доставку
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

export default Header;
