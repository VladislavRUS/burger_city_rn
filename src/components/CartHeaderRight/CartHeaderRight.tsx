import React from 'react';
import CartIcon from '../Icons/CartIcon/CartIcon';
import { Wrapper } from './CartHeaderRight.styles';

interface ICartHeaderRightProps {
  onPress: () => void;
}

class CartHeaderRight extends React.PureComponent<ICartHeaderRightProps> {
  public render() {
    const { onPress } = this.props;

    return (
      <Wrapper onPress={onPress}>
        <CartIcon />
      </Wrapper>
    );
  }
}

export default CartHeaderRight;
