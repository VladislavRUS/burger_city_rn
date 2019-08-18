/* tslint:disable */

import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIconProps } from '../IIconProps';

const SearchIcon: React.FC<IIconProps> = ({
  width = 19,
  height = 19,
  color = '#a7acb6',
}) => (
  <Svg width={width} height={height}>
    <Path
      fill={color}
      d="M8.23 14.631a6.401 6.401 0 1 1 0-12.802 6.401 6.401 0 0 1 0 12.802zm10.502 2.808l-4.072-4.072a8.23 8.23 0 1 0-1.293 1.293l4.072 4.072a.912.912 0 0 0 1.293 0 .914.914 0 0 0 0-1.293z"
    />
  </Svg>
);

export default SearchIcon;
