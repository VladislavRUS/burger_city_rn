import React from 'react';
import { FastImageSource } from 'react-native-fast-image';
import Combo from '../../../models/Combo';
import { Image, Wrapper } from './BestOffer.styles';

interface IBestOfferProps {
  combo: Combo;
  onPress: (combo: Combo) => void;
}

class BestOffer extends React.PureComponent<IBestOfferProps> {
  public render() {
    const { combo } = this.props;

    return (
      <Wrapper onPress={this.onPress}>
        <Image source={combo.imageUrl as FastImageSource} />
      </Wrapper>
    );
  }

  private onPress = () => {
    const { combo, onPress } = this.props;
    onPress(combo);
  };
}

export default BestOffer;
