/* tslint:disable */

import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIconProps } from '../IIconProps';

const DropdownIcon: React.FC<IIconProps> = ({
  width = 15,
  height = 8,
  color = '#e59413',
}) => (
  <Svg width={width} height={height}>
    <Path
      fill={color}
      d="M.672.312c-.36.36-.36.94 0 1.3L6.778 7.72a.732.732 0 0 0 1.037 0l6.106-6.107c.36-.36.36-.94 0-1.3a.918.918 0 0 0-1.3 0l-5.328 5.32L1.965.305A.916.916 0 0 0 .672.312z"
    />
  </Svg>
);

export default DropdownIcon;
