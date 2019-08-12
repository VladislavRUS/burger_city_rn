import Ripple from 'react-native-material-ripple';
import styled from 'styled-components/native';

export const Wrapper = styled(Ripple).attrs({
  rippleColor: 'rgba(255, 255, 255, 0.8)',
})`
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0 40px;
  background-color: #000;
  border-radius: 8px;
`;

export const TextsWrapper = styled.View`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
`;
