import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
// @ts-ignore
import backImg from '../../../assets/icons/back.png';

export const Wrapper = styled.TouchableOpacity`
  margin-left: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowImage = styled(FastImage).attrs({
  source: backImg,
})`
  width: 11px;
  height: 18px;
`;
