import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

interface IImageProps {
  width: number;
  height: number;
}

export const Image = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.contain,
})<IImageProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;
