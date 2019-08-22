import { observer } from 'mobx-react';
import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { NavigationScreenProp } from 'react-navigation';
import { CartHeaderRight } from '../../components/CartHeaderRight';
import { CheckmarkIcon } from '../../components/Icons/CheckmarkIcon';
import { Text } from '../../components/Text';
import { Routes } from '../../constants/Routes';
import OrderPayment from '../../models/OrderPayment';
import { Store } from '../../store';
import {
  IconWrapper,
  OrderPaymentWrapper,
  TitleWrapper,
  Wrapper,
} from './Wallet.styles';

@observer
class Wallet extends React.Component<InjectedIntlProps> {
  public static navigationOptions = ({
    navigation,
  }: {
    navigation: NavigationScreenProp<any, any>;
  }) => {
    const onPress = () => navigation.navigate(Routes.CART);

    return {
      title: 'BurgerCity',
      headerRight: <CartHeaderRight onPress={onPress} />,
    };
  };

  get formatMessage() {
    return this.props.intl.formatMessage;
  }

  public render() {
    return (
      <Wrapper>
        <TitleWrapper>
          <Text fontSize={20} fontWeight={700}>
            {this.formatMessage({ id: 'wallet.title' })}
          </Text>
        </TitleWrapper>
        {Store.orderPayments.map(
          (orderPayment: OrderPayment, index: number) => {
            const isSelected = Store.orderPayment.name === orderPayment.name;
            const onPress = () => Store.setOrderPayment(orderPayment);

            return (
              <OrderPaymentWrapper key={index} onPress={onPress}>
                <Text fontSize={13} fontWeight={500}>
                  {orderPayment.name}
                </Text>
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

export default injectIntl(Wallet);
