import React from 'react';
import { ArrowImage, Wrapper } from './ArrowHeaderLeft.styles';

interface IArrowHeaderLeftProps {
  onPress: () => void;
}

const ArrowHeaderLeft: React.FC<IArrowHeaderLeftProps> = ({ onPress }) => (
  <Wrapper onPress={onPress}>
    <ArrowImage />
  </Wrapper>
);

export default ArrowHeaderLeft;
