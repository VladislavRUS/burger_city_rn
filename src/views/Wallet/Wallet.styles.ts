import Ripple from 'react-native-material-ripple';
import styled from 'styled-components/native';
import { Colors } from '../../constants/Colors';

export const Wrapper = styled.View`
  flex: 1;
  padding: 20px;
`;

export const OrderPaymentWrapper = styled(Ripple)`
  padding: 0 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 6px;
  elevation: 3;
  height: 52px;
  background-color: #fff;
  overflow: hidden;
  margin-top: 24px;
`;

interface IIconWrapperProps {
  isSelected: boolean;
}

export const IconWrapper = styled.View<IIconWrapperProps>`
  margin-left: auto;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${props =>
    props.isSelected ? Colors.MAIN_COLOR : Colors.LIGHT_GREY};
  padding-top: 7px;
  padding-left: 5px;
`;
