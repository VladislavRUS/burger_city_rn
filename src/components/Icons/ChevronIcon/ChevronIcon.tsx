import React from 'react';
import chevronImg from '../../../../assets/icons/chevron.png';
import { IIconProps } from '../IIconProps';
import { Image } from './ChevronIcon.styles';

const ChevronIcon: React.FC<IIconProps> = ({
  width = 8,
  height = 5,
  color = '#727c8e',
}) => <Image source={chevronImg} />;

export default ChevronIcon;
