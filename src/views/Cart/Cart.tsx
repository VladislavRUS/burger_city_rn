import React from 'react';

import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Keyboard } from 'react-native';
import { NavigationScreenProp, NavigationScreenProps } from 'react-navigation';
import { ArrowHeaderLeft } from '../../components/ArrowHeaderLeft';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { OrderItems } from '../../components/OrderItems';
import { Text } from '../../components/Text';
import { Colors } from '../../constants/Colors';
import { Routes } from '../../constants/Routes';
import { Store } from '../../store';
import {
  BottomButtonWrapper,
  EmptyWrapper,
  HeaderWrapper,
  IncludedTextWrapper,
  OrderItemsWrapper,
  PriceWrapper,
  PromoTextWrapper,
  PromoWrapper,
  ScrollableWrapper,
  Wrapper,
} from './Cart.styles';

@observer
class Cart extends React.Component<NavigationScreenProps & InjectedIntlProps> {
  public static navigationOptions = ({
    navigation,
  }: {
    navigation: NavigationScreenProp<any, any>;
  }) => {
    const onPress = () => navigation.goBack();

    return {
      title: 'Burger City',
      headerLeft: <ArrowHeaderLeft onPress={onPress} />,
    };
  };

  get formatMessage() {
    return this.props.intl.formatMessage;
  }

  @observable
  private promoCode = '';
  @observable
  private isKeyboardVisible = false;

  public componentDidMount() {
    Keyboard.addListener('keyboardDidShow', this.onKeyboardShow);
    Keyboard.addListener('keyboardDidHide', this.onKeyboardHide);
  }

  public componentWillUnmount() {
    Keyboard.removeListener('keyboardDidShow', this.onKeyboardShow);
    Keyboard.removeListener('keyboardDidHide', this.onKeyboardHide);
  }

  public render() {
    if (Store.order.productOrders.length === 0) {
      return this.renderEmptyPlaceHolder();
    }

    return (
      <Wrapper>
        <ScrollableWrapper>
          {this.renderHeader()}
          {this.renderOrderItems()}
          {this.renderPromo()}
        </ScrollableWrapper>
        {!this.isKeyboardVisible && (
          <BottomButtonWrapper>
            <Button onPress={this.onCheckout}>
              <Text fontSize={16} fontWeight={700} color={'#fff'}>
                {this.formatMessage({ id: 'cart.checkout' })}
              </Text>
            </Button>
          </BottomButtonWrapper>
        )}
      </Wrapper>
    );
  }

  private onKeyboardShow = () => {
    this.isKeyboardVisible = true;
  };

  private onKeyboardHide = () => {
    this.isKeyboardVisible = false;
  };

  private renderEmptyPlaceHolder() {
    return (
      <EmptyWrapper>
        <Text fontSize={20} fontWeight={700}>
          {this.formatMessage({ id: 'cart.empty' })}
        </Text>
      </EmptyWrapper>
    );
  }

  private renderHeader() {
    return (
      <HeaderWrapper>
        <Text fontSize={18} fontWeight={700} color={'#fff'}>
          {this.formatMessage({ id: 'cart.subTotal' })}
        </Text>
        <PriceWrapper>
          <Text fontSize={15} fontWeight={700} color={Colors.MAIN_COLOR}>
            {Store.totalPrice}$
          </Text>
        </PriceWrapper>
      </HeaderWrapper>
    );
  }

  private renderOrderItems() {
    return (
      <OrderItemsWrapper>
        <IncludedTextWrapper>
          <Text fontSize={20} fontWeight={700}>
            {this.formatMessage({ id: 'cart.includes' })}
          </Text>
        </IncludedTextWrapper>
        <OrderItems order={Store.order} />
      </OrderItemsWrapper>
    );
  }

  private renderPromo() {
    return (
      <PromoWrapper>
        <PromoTextWrapper>
          <Text fontSize={20} fontWeight={700}>
            {this.formatMessage({ id: 'cart.promoCode' })}
          </Text>
        </PromoTextWrapper>
        <Input
          value={this.promoCode}
          onChangeText={this.onPromoChange}
          placeholder={this.formatMessage({ id: 'cart.enterPromoCode' })}
        />
      </PromoWrapper>
    );
  }

  private onPromoChange = (text: string) => {
    this.promoCode = text;
  };

  private onCheckout = () => {
    const { navigation } = this.props;
    navigation.navigate(Routes.DELIVERY_DETAILS);
  };
}

export default injectIntl(Cart);
