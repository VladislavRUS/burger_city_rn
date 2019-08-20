import React from 'react';
import OrderItems from '../../components/OrderItems/OrderItems';
import Store from '../../store/Store';
import { Details } from './Details';
import { Header } from './Header';
import {
  ButtonWrapper,
  OrderItemsWrapper,
  ScrollableWrapper,
  Wrapper,
} from './Order.styles';

import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { NavigationScreenProp } from 'react-navigation';
import ArrowHeaderLeft from '../../components/ArrowHeaderLeft/ArrowHeaderLeft';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import SurpriseModal from './SurpriseModal/SurpriseModal';

@observer
class Order extends React.Component {
  public static navigationOptions = ({
    navigation,
  }: {
    navigation: NavigationScreenProp<any, any>;
  }) => {
    const onPress = () => navigation.goBack();

    return {
      headerLeft: <ArrowHeaderLeft onPress={onPress} />,
    };
  };

  @observable
  private isConfirmed = false;

  public render() {
    return (
      <Wrapper>
        <ScrollableWrapper>
          <Header orderPrice={100} chargePrice={40} />
          <Details dateTime={'12:55'} address={'Печерская 20а'} />
          {this.renderOrderItems()}
        </ScrollableWrapper>
        <ButtonWrapper>
          <Button onPress={this.onConfirm}>
            <Text fontSize={16} fontWeight={700} color={'#fff'}>
              Подтвердить
            </Text>
          </Button>
        </ButtonWrapper>
        <SurpriseModal
          isOpened={this.isConfirmed}
          onRequestClose={this.onCloseModal}
        />
      </Wrapper>
    );
  }

  private renderOrderItems() {
    return (
      <OrderItemsWrapper>
        <OrderItems order={Store.order} />
      </OrderItemsWrapper>
    );
  }

  private onConfirm = () => {
    this.isConfirmed = true;
  };

  private onCloseModal = () => {
    this.isConfirmed = false;
  };
}

export default Order;
