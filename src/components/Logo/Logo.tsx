import React from 'react';
import logoImg from '../../../assets/images/logo.png';
import { Image } from './Logo.styles';

interface ILogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<ILogoProps> = ({ width = 100, height = 120 }) => (
  <Image width={width} height={height} source={logoImg} />
);
export default Logo;
