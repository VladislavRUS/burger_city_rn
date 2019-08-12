import React from 'react';
import { ImageSourcePropType } from 'react-native';
import Combo from '../../../models/Combo';
import { Image, Wrapper } from './BestOffer.styles';

interface IBestOfferProps {
  combo: Combo;
}

const BestOffer: React.FC<IBestOfferProps> = ({ combo }) => (
  <Wrapper>
    <Image source={combo.imageUrl as ImageSourcePropType} />
  </Wrapper>
);

export default BestOffer;
