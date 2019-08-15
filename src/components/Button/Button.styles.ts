import Ripple from 'react-native-material-ripple';
import styled from 'styled-components';
import { Colors } from '../../constants/Colors';

export const Wrapper = styled(Ripple)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  border-radius: 6px;
  background-color: ${Colors.MAIN_COLOR};
  elevation: 3;
`;
