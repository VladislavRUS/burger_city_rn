/* tslint:disable */

import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIconProps } from '../IIconProps';

const WatchIcon: React.FC<IIconProps> = ({
  width = 24,
  height = 24,
  color = '#727c8e',
}) => (
  <Svg width={width} height={height}>
    <Path
      fill={color}
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7z"
    />
  </Svg>
);

export default WatchIcon;
