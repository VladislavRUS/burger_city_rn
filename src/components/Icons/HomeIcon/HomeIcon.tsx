/* tslint:disable */

import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIconProps } from '../IIconProps';

const HomeIcon: React.FC<IIconProps> = ({
  width = 25,
  height = 24,
  color = '#727c8e',
}) => (
  <Svg width={width} height={height}>
    <Path
      fill={color}
      d="M11.16.53L.214 10.366a.62.62 0 0 0-.214.468v11.869c0 .342.277.619.619.619h7.204a.619.619 0 0 0 .619-.62v-8.069c0-.342.277-.619.618-.619h6.555c.342 0 .619.277.619.62v8.069c0 .342.277.619.619.619h7.204a.619.619 0 0 0 .619-.62V10.835c0-.18-.079-.35-.215-.468L13.516.53a1.801 1.801 0 0 0-2.356 0z"
    />
  </Svg>
);

export default HomeIcon;
