import React from 'react';
import { Text } from '../../components/Text';

import { observable } from 'mobx';
import { observer } from 'mobx-react';
import FastImage, { FastImageSource } from 'react-native-fast-image';
import { NavigationScreenProp, NavigationScreenProps } from 'react-navigation';
import ArrowHeaderLeft from '../../components/ArrowHeaderLeft/ArrowHeaderLeft';
import { Button } from '../../components/Button';
import QuantityButton from '../../components/QuantityButton/QuantityButton';
import { Categories } from '../../constants/Categories';
import Combo from '../../models/Combo';
import ProductModel from '../../models/Product';
import ProductOrder from '../../models/ProductOrder';
import { Store } from '../../store';
import {
  ButtonsWrapper,
  ButtonWrapper,
  CartButtonWrapper,
  Image,
  TitleWrapper,
  Wrapper,
} from './Customize.styles';
import Product from './Product/Product';

@observer
class Customize extends React.Component<NavigationScreenProps> {
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

  @observable
  private isLoading = false;
  @observable
  private quantity: number = 1;
  private currentProduct!: ProductModel;

  constructor(props: any) {
    super(props);

    if (Store.currentBurger) {
      this.currentProduct = Store.currentBurger;
    } else if (Store.currentCombo) {
      this.currentProduct = Store.currentCombo;
    }
  }

  public render() {
    return (
      <Wrapper>
        {this.renderTitle()}
        {this.renderImage()}
        {this.renderButtons()}
        {this.renderComboIncludes()}
      </Wrapper>
    );
  }

  private renderTitle() {
    return (
      <TitleWrapper>
        <Text fontSize={20} fontWeight={700}>
          {this.currentProduct.keyName}
        </Text>
        <Text fontSize={15} fontWeight={600}>
          Please customize your meal
        </Text>
      </TitleWrapper>
    );
  }

  private renderImage() {
    const resizeMode =
      this.currentProduct.category === Categories.BURGER
        ? FastImage.resizeMode.contain
        : FastImage.resizeMode.cover;

    return (
      <Image
        source={this.currentProduct.imageUrl as FastImageSource}
        resizeMode={resizeMode}
      />
    );
  }

  private renderButtons() {
    return (
      <ButtonsWrapper>
        <ButtonWrapper>
          <QuantityButton
            quantity={this.quantity}
            onDec={this.onDec}
            onInc={this.onInc}
          />
        </ButtonWrapper>
        <CartButtonWrapper>
          <Button onPress={this.onAddToCart} isLoading={this.isLoading}>
            <Text color={'#fff'} fontSize={16} fontWeight={700}>
              Add to cart
            </Text>
          </Button>
        </CartButtonWrapper>
      </ButtonsWrapper>
    );
  }

  private renderComboIncludes() {
    if (this.currentProduct.category !== Categories.COMBO) {
      return null;
    }

    return (this.currentProduct as Combo).products.map(product => (
      <Product key={product.id} product={product} />
    ));
  }

  private onInc = () => {
    this.quantity++;
  };

  private onDec = () => {
    if (this.quantity > 1) {
      this.quantity--;
    }
  };

  private onAddToCart = async () => {
    this.isLoading = true;
    const productOrder = new ProductOrder(this.currentProduct, this.quantity);

    await Store.addToCart(productOrder);
    this.isLoading = false;

    const { navigation } = this.props;
    navigation.goBack();
  };
}

export default Customize;
