import React from 'react';
import { FastImageSource } from 'react-native-fast-image';
import Combo from '../../../models/Combo';
import { Image, Wrapper } from './BestOffer.styles';

interface IBestOfferProps {
  combo: Combo;
}

const BestOffer: React.FC<IBestOfferProps> = ({ combo }) => (
  <Wrapper>
    <Image source={combo.imageUrl as FastImageSource} />
  </Wrapper>
);

export default BestOffer;
