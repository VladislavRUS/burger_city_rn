import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
// @ts-ignore
import cartImg from '../../../assets/icons/cart.png';

export const Wrapper = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const CartImage = styled(FastImage).attrs({
  source: cartImg,
})`
  width: 20px;
  height: 20px;
`;
