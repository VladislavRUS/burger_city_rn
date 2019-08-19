/* tslint:disable */

import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIconProps } from '../IIconProps';

const WalletIcon: React.FC<IIconProps> = ({
  width = 26,
  height = 24,
  color = '#727c8e',
}) => (
  <Svg width={width} height={height}>
    <Path
      fill={color}
      d="M18.035 12.046c0-1.423 1.423-2.846 2.846-2.846h5.123v5.692h-5.123c-1.423 0-2.846-1.423-2.846-2.846z"
    />
    <Path
      fill={color}
      d="M2.362.092c-.576 0-1.12.278-1.446.752-.308.447-.489.987-.489 1.569v18.802A2.794 2.794 0 0 0 3.212 24h19.552a2.794 2.794 0 0 0 2.785-2.785v-5.803h-5.037a3.376 3.376 0 0 1-3.366-3.366v-.464a3.376 3.376 0 0 1 3.366-3.366h5.037V2.413c0-.078-.006-.155-.012-.232H3.307c-.494 0-.972-.22-1.258-.62A.616.616 0 0 1 2.53.556H24.62a.232.232 0 1 0 0-.465z"
    />
  </Svg>
);

export default WalletIcon;