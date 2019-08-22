import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 24px;
  background-color: #fff;
  border-radius: 6px;
  elevation: 3;
`;

export const Image = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.contain,
})`
  margin-right: 20px;
  margin-left: 10px;
  width: 125px;
  height: 125px;
`;

export const TextsWrapper = styled.View`
  display: flex;
  flex-direction: column;
  width: 0;
  flex-grow: 1;
`;

export const PriceWrapper = styled.View`
  position: absolute;
  bottom: 15px;
  right: 15px;
`;
