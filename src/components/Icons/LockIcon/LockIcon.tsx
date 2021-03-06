/* tslint:disable */

import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import { IIconProps } from '../IIconProps';

const LockIcon: React.FC<IIconProps> = ({
  width = 13,
  height = 17,
  color = '#92a1b1',
}) => (
  <Svg width={width} height={height}>
    <Path
      fill={color}
      d="M6.625 9.75c.345 0 .625.28.625.625a.62.62 0 0 1-.355.56.313.313 0 0 0-.175.316l.18 1.624h-.55l.18-1.624a.313.313 0 0 0-.175-.316.62.62 0 0 1-.355-.56c0-.345.28-.625.625-.625zm-.739 1.63l-.197 1.773A.313.313 0 0 0 6 13.5h1.25a.313.313 0 0 0 .31-.347l-.196-1.773c.32-.233.511-.601.511-1.005a1.251 1.251 0 0 0-2.5 0c0 .404.191.772.511 1.005z"
    />
    <Path
      fill="none"
      stroke={color}
      strokeMiterlimit={50}
      strokeWidth={0.4}
      d="M6.625 9.75c.345 0 .625.28.625.625a.62.62 0 0 1-.355.56.313.313 0 0 0-.175.316l.18 1.624h-.55l.18-1.624a.313.313 0 0 0-.175-.316.62.62 0 0 1-.355-.56c0-.345.28-.625.625-.625zm-.739 1.63l-.197 1.773A.313.313 0 0 0 6 13.5h1.25a.313.313 0 0 0 .31-.347l-.196-1.773c.32-.233.511-.601.511-1.005a1.251 1.251 0 0 0-2.5 0c0 .404.191.772.511 1.005z"
    />
    <G>
      <Path
        fill={color}
        d="M11.625 14.75c0 .345-.28.625-.625.625H2.25a.626.626 0 0 1-.625-.625v-7.5h10zm-2.5-9.375v1.25h-5v-1.25c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5zm-6.25 0a3.754 3.754 0 0 1 3.75-3.75 3.754 3.754 0 0 1 3.75 3.75v1.25H9.75v-1.25A3.129 3.129 0 0 0 6.625 2.25 3.129 3.129 0 0 0 3.5 5.375v1.25h-.625zM11 6.625v-1.25A4.38 4.38 0 0 0 6.625 1 4.38 4.38 0 0 0 2.25 5.375v1.25h-.937A.312.312 0 0 0 1 6.938v7.812c0 .69.56 1.25 1.25 1.25H11c.69 0 1.25-.56 1.25-1.25V6.938a.312.312 0 0 0-.313-.313z"
      />
      <Path
        fill="none"
        stroke={color}
        strokeMiterlimit={50}
        strokeWidth={0.4}
        d="M11.625 14.75c0 .345-.28.625-.625.625H2.25a.626.626 0 0 1-.625-.625v-7.5h10zm-2.5-9.375v1.25h-5v-1.25c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5zm-6.25 0a3.754 3.754 0 0 1 3.75-3.75 3.754 3.754 0 0 1 3.75 3.75v1.25H9.75v-1.25A3.129 3.129 0 0 0 6.625 2.25 3.129 3.129 0 0 0 3.5 5.375v1.25h-.625zM11 6.625v-1.25A4.38 4.38 0 0 0 6.625 1 4.38 4.38 0 0 0 2.25 5.375v1.25h-.937A.312.312 0 0 0 1 6.938v7.812c0 .69.56 1.25 1.25 1.25H11c.69 0 1.25-.56 1.25-1.25V6.938a.312.312 0 0 0-.313-.313z"
      />
    </G>
  </Svg>
);

export default LockIcon;
