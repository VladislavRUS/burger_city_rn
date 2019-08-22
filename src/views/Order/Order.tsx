import React from 'react';
import { BackHandler } from 'react-native';
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
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { NavigationScreenProp, NavigationScreenProps } from 'react-navigation';
import ArrowHeaderLeft from '../../components/ArrowHeaderLeft/ArrowHeaderLeft';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { Routes } from '../../constants/Routes';
import { SurpriseModal } from './SurpriseModal';

@observer
class Order extends React.Component<NavigationScreenProps & InjectedIntlProps> {
  @computed
  get order() {
    return Store.confirmedOrder || Store.order;
  }

  get formatMessage() {
    return this.props.intl.formatMessage;
  }
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
      title: 'Burger City',
      headerLeft: isHeaderLeftVisible ? (
        <ArrowHeaderLeft onPress={onPress} />
      ) : null,
    };
  };

  @observable
  private isModalOpened = false;
  @observable
  private isConfirming = false;
  private backHandler: any;

  constructor(props: NavigationScreenProps & InjectedIntlProps) {
    super(props);

    this.setNavigationParams({
      isHeaderLeftVisible: true,
      gesturesEnabled: true,
    });
  }

  public componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.onBackPress,
    );
  }

  public componentWillUnmount() {
    this.backHandler.remove();
  }

  public render() {
    return (
      <Wrapper>
        <ScrollableWrapper>
          <Header orderPrice={100} chargePrice={40} />
          <Details
            dateTime={moment(this.order.dateTime).format(
              this.formatMessage({ id: 'order.dateTimeFormat' }),
            )}
            address={this.order.addressDescription!.title}
          />
          {this.renderOrderItems()}
        </ScrollableWrapper>
        <ButtonWrapper>
          {Store.confirmedOrder ? (
            <Button onPress={this.onTrack}>
              <Text fontSize={16} fontWeight={700} color={'#fff'}>
                {this.formatMessage({ id: 'order.trackOrder' })}
              </Text>
            </Button>
          ) : (
            <Button onPress={this.onConfirm} isLoading={this.isConfirming}>
              <Text fontSize={16} fontWeight={700} color={'#fff'}>
                {this.formatMessage({ id: 'order.confirm' })}
              </Text>
            </Button>
          )}
        </ButtonWrapper>
        <SurpriseModal
          isOpened={this.isModalOpened}
          onRequestClose={this.onCloseModal}
          prize={this.formatMessage({ id: 'order.prize' })}
        />
      </Wrapper>
    );
  }

  private onBackPress = () => {
    const { navigation } = this.props;

    if (Store.confirmedOrder) {
      navigation.popToTop();
      return true;
    }

    return false;
  };

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

export default injectIntl(Order);
