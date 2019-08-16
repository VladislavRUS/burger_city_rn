import React from 'react';

import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Keyboard } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { ArrowHeaderLeft } from '../../components/ArrowHeaderLeft';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { OrderItems } from '../../components/OrderItems';
import { Text } from '../../components/Text';
import { Colors } from '../../constants/Colors';
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
class Cart extends React.Component {
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
                Продолжить
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
          Корзина пуста!
        </Text>
      </EmptyWrapper>
    );
  }

  private renderHeader() {
    return (
      <HeaderWrapper>
        <Text fontSize={18} fontWeight={700} color={'#fff'}>
          Всего
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
            Выбраны
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
            Промо код
          </Text>
        </PromoTextWrapper>
        <Input value={this.promoCode} onChangeText={this.onPromoChange} />
      </PromoWrapper>
    );
  }

  private onPromoChange = (text: string) => {
    this.promoCode = text;
  };

  private onCheckout = () => {
    console.log('onCheckout');
  };
}

export default Cart;
