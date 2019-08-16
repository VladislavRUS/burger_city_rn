import React from 'react';
import { CartImage, Wrapper } from './CartHeaderRight.styles';

interface ICartHeaderRightProps {
  onPress: () => void;
}

class CartHeaderRight extends React.PureComponent<ICartHeaderRightProps> {
  public render() {
    const { onPress } = this.props;

    return (
      <Wrapper onPress={onPress}>
        <CartImage />
      </Wrapper>
    );
  }
}

export default CartHeaderRight;
