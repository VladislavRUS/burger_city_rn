import FastImage from 'react-native-fast-image';
import Ripple from 'react-native-material-ripple';
import styled from 'styled-components/native';

export const Wrapper = styled(Ripple)`
  height: 86px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px 0 10px;
  background-color: #fff;
  border-radius: 6px;
  elevation: 15;
  shadow-opacity: 0.3;
  shadow-radius: 8px;
  shadow-color: #000;
  shadow-offset: 0px 0px;
`;

export const Image = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.contain,
})`
  margin-right: 10px;
  width: 75px;
  height: 51px;
`;

export const InfoWrapper = styled.View`
  display: flex;
  flex-direction: column;
`;

export const NameWrapper = styled.View``;
export const PriceWrapper = styled.View``;

export const ChevronWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  padding-left: 1px;
  background-color: rgba(114, 124, 142, 0.2);
  border-radius: 9px;
  margin-left: auto;
`;
