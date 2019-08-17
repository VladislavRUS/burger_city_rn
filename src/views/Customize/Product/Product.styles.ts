import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  margin-bottom: 10px;
`;

export const Image = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.contain,
})`
  width: 45px;
  height: 45px;
  margin-right: 20px;
`;
