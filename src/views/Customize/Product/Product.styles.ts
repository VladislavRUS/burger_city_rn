import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 52px;
  padding: 0 20px;
  margin-bottom: 10px;
  background-color: #fff;
  elevation: 3;
  border-radius: 6px;
`;

export const Image = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.contain,
})`
  width: 45px;
  height: 45px;
  margin-right: 20px;
`;
