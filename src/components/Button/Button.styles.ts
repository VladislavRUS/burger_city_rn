import Ripple from 'react-native-material-ripple';
import styled from 'styled-components';
import { Colors } from '../../constants/Colors';

interface IWrapperProps {
  isDisabled: boolean;
}

export const Wrapper = styled(Ripple)<IWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  border-radius: 6px;
  background-color: ${props =>
    props.isDisabled ? Colors.LIGHT_GREY : Colors.MAIN_COLOR};
  elevation: 3;
`;
