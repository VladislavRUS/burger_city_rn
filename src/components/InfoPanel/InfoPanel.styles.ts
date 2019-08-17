import styled, { css } from 'styled-components/native';
import { InfoPanelLook } from './InfoPanel';

interface IWrapperProps {
  look?: InfoPanelLook;
}

export const Wrapper = styled.TouchableOpacity<IWrapperProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 6px;
  elevation: 3;
  height: 52px;
  background-color: #fff;
  overflow: hidden;

  ${props =>
    props.look === InfoPanelLook.PADDED &&
    css`
      padding: 0 20px;
    `}
`;
