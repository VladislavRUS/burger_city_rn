import FastImage from 'react-native-fast-image';
import Ripple from 'react-native-material-ripple';
import styled from 'styled-components/native';

export const Wrapper = styled(Ripple)`
  width: 131px;
  height: 179px;
  border-radius: 10px;
  overflow: hidden;
  background-color: black;
`;

export const Image = styled(FastImage)`
  width: 100%;
  height: 100%;
`;
