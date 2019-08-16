import React from 'react';
import BackIcon from '../Icons/BackIcon/BackIcon';
import { Wrapper } from './ArrowHeaderLeft.styles';

interface IArrowHeaderLeftProps {
  onPress: () => void;
}

const ArrowHeaderLeft: React.FC<IArrowHeaderLeftProps> = ({ onPress }) => (
  <Wrapper onPress={onPress}>
    <BackIcon />
  </Wrapper>
);

export default ArrowHeaderLeft;
