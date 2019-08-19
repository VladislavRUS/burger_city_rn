import { observer } from 'mobx-react';
import React from 'react';
import CheckmarkIcon from '../../components/Icons/CheckmarkIcon/CheckmarkIcon';
import { Text } from '../../components/Text';
import OrderPayment from '../../models/OrderPayment';
import { Store } from '../../store';
import { IconWrapper, OrderPaymentWrapper, Wrapper } from './Wallet.styles';

@observer
class Wallet extends React.Component {
  public render() {
    return (
      <Wrapper>
        <Text fontSize={20} fontWeight={700}>
          Способ оплаты
        </Text>
        {Store.orderPayments.map(
          (orderPayment: OrderPayment, index: number) => {
            const isSelected = Store.orderPayment.name === orderPayment.name;
            const onPress = () => Store.setOrderPayment(orderPayment);

            return (
              <OrderPaymentWrapper key={index} onPress={onPress}>
                <Text>{orderPayment.name}</Text>
                <IconWrapper isSelected={isSelected}>
                  <CheckmarkIcon color={isSelected ? '#fff' : '#000'} />
                </IconWrapper>
              </OrderPaymentWrapper>
            );
          },
        )}
      </Wrapper>
    );
  }
}

export default Wallet;
