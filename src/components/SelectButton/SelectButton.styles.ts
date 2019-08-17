import styled from 'styled-components/native';
import { Colors } from '../../constants/Colors';

export const Wrapper = styled.View`
  height: 52px;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 6px;
  elevation: 3;
  background-color: #fff;
`;

interface IOptionProps {
  isActive: boolean;
}

export const Option = styled.TouchableOpacity<IOptionProps>`
  flex-grow: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props =>
    props.isActive ? Colors.MAIN_COLOR : 'transparent'};
`;
