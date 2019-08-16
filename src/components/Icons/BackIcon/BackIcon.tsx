/* tslint:disable */

import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIconProps } from '../IIconProps';

const BackIcon: React.FC<IIconProps> = ({
  width = 11,
  height = 18,
  color = '#e59413',
}) => (
  <Svg width={width} height={height}>
    <Path
      fill={color}
      d="M0 9.003v.003c0 .363.15.69.393.925l7.714 7.715.003-.004a1.286 1.286 0 1 0 1.727-1.903L3.1 9.003l6.824-6.825A1.286 1.286 0 0 0 8.107.36L.392 8.074A1.281 1.281 0 0 0 0 9v.003z"
    />
  </Svg>
);

export default BackIcon;
