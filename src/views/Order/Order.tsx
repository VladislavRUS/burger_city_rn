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

import { computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import moment from 'moment';
import { NavigationScreenProp, NavigationScreenProps } from 'react-navigation';
import ArrowHeaderLeft from '../../components/ArrowHeaderLeft/ArrowHeaderLeft';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { Routes } from '../../constants/Routes';
import SurpriseModal from './SurpriseModal/SurpriseModal';

@observer
class Order extends React.Component<NavigationScreenProps> {
  public static navigationOptions = ({
    navigation,
  }: {
    navigation: NavigationScreenProp<any, any>;
  }) => {
    const isHeaderLeftVisible = navigation.getParam('isHeaderLeftVisible');
    const gesturesEnabled = navigation.getParam('gesturesEnabled');

    const onPress = () => navigation.goBack();

    return {
      gesturesEnabled,
      headerLeft: isHeaderLeftVisible ? (
        <ArrowHeaderLeft onPress={onPress} />
      ) : null,
    };
  };

  @observable
  private isModalOpened = false;
  @observable
  private isConfirming = false;

  @computed
  get order() {
    return Store.confirmedOrder || Store.order;
  }

  constructor(props: NavigationScreenProps) {
    super(props);

    this.setNavigationParams({
      isHeaderLeftVisible: true,
      gesturesEnabled: true,
    });
  }

  public render() {
    return (
      <Wrapper>
        <ScrollableWrapper>
          <Header orderPrice={100} chargePrice={40} />
          <Details
            dateTime={moment(this.order.dateTime).format('HH:mm')}
            address={this.order.addressDescription!.title}
          />
          {this.renderOrderItems()}
        </ScrollableWrapper>
        <ButtonWrapper>
          {Store.confirmedOrder ? (
            <Button onPress={this.onTrack}>
              <Text fontSize={16} fontWeight={700} color={'#fff'}>
                Отследить
              </Text>
            </Button>
          ) : (
            <Button onPress={this.onConfirm} isLoading={this.isConfirming}>
              <Text fontSize={16} fontWeight={700} color={'#fff'}>
                Подтвердить
              </Text>
            </Button>
          )}
        </ButtonWrapper>
        <SurpriseModal
          isOpened={this.isModalOpened}
          onRequestClose={this.onCloseModal}
        />
      </Wrapper>
    );
  }

  private renderOrderItems() {
    return (
      <OrderItemsWrapper>
        <OrderItems order={this.order} />
      </OrderItemsWrapper>
    );
  }

  private onConfirm = async () => {
    this.isConfirming = true;

    this.setNavigationParams({
      isHeaderLeftVisible: false,
      gesturesEnabled: false,
    });

    await Store.confirmOrder();
    this.isConfirming = false;
    this.isModalOpened = true;
  };

  private setNavigationParams(params: any) {
    const { navigation } = this.props;
    navigation.setParams(params);
  }

  private onCloseModal = async () => {
    this.isModalOpened = false;
  };

  private onTrack = () => {
    const { navigation } = this.props;
    navigation.popToTop();
    navigation.navigate(Routes.TRACK_NAVIGATOR);
  };
}

export default Order;
