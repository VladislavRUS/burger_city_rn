/* tslint:disable */

import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIconProps } from '../IIconProps';

const PencilIcon: React.FC<IIconProps> = ({
  width = 12,
  height = 12,
  color = '#727c8e',
}) => (
  <Svg width={width} height={height}>
    <Path
      fill={color}
      d="M7.615 1.069c.33-.272.74-.42 1.172-.42a1.836 1.836 0 0 1 1.84 1.84c0 .434-.148.843-.42 1.172zm-3.748 8.945l-1.06-1.06 5.89-5.889 1.059 1.06zM7.15 1.523l1.084 1.083-5.889 5.89-1.084-1.084zM10.546.73a2.487 2.487 0 0 0-3.52 0L.573 7.18a.323.323 0 0 0-.091.186l-.479 3.541c-.014.101.022.202.092.272.06.06.144.096.228.096.014 0 .029 0 .043-.002l2.134-.289a.325.325 0 0 0-.087-.644l-1.71.231.334-2.47 2.6 2.6a.318.318 0 0 0 .457 0l6.452-6.451c.471-.471.73-1.096.73-1.761 0-.666-.259-1.29-.73-1.76z"
    />
  </Svg>
);

export default PencilIcon;
