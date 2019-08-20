import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import colaImg from '../../../../assets/drinks/cola_1.png';

export const Overlay = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Wrapper = styled.View`
  position: relative;
  border-radius: 10px;
  background-color: #fff;
  width: 300px;
  height: 300px;
  elevation: 5;
  z-index: 1;
  flex-direction: column;
  align-items: center;
`;

export const CircleWrapper = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: -30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Circle = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: #fff;
`;

export const PrizeImage = styled(FastImage).attrs({
  source: colaImg,
  resizeMode: FastImage.resizeMode.contain,
})`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

export const TitleWrapper = styled.View`
  margin-bottom: 11px;
`;

export const InfoWrapper = styled.View`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const ButtonWrapper = styled.View`
  width: 150px;
`;
