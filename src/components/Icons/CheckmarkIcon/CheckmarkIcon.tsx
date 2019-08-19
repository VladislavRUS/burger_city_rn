/* tslint:disable */

import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIconProps } from '../IIconProps';

const CheckmarkIcon: React.FC<IIconProps> = ({
  width = 10,
  height = 17,
  color = '#000',
}) => (
  <Svg width={width} height={height}>
    <Path
      fill={color}
      d="M3.83 6.092h.001c.094 0 .179-.04.24-.102l4.777-4.926h-.001a.333.333 0 1 0-.493-.447L3.83 5.288 2.063 3.522a.332.332 0 0 0-.47.47L3.59 5.99c.06.062.145.101.24.101z"
    />
    <Path
      fill="none"
      stroke={color}
      strokeMiterlimit={50}
      strokeWidth={0.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.83 6.092h.001c.094 0 .179-.04.24-.102h0v0l4.777-4.926v0h-.001a.333.333 0 1 0-.493-.447L3.83 5.288v0L2.063 3.522v0h0a.332.332 0 0 0-.47.47h0v0L3.59 5.99v0h0c.06.062.145.101.24.101 0 0 0 0 0 0z"
    />
  </Svg>
);

export default CheckmarkIcon;
