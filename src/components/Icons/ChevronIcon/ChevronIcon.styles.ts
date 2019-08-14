import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Image = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.contain,
})`
  width: 5px;
  height: 8px;
`;
