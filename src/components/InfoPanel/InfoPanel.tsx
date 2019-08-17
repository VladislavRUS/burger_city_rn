import React from 'react';
import { Wrapper } from './InfoPanel.styles';

interface IInfoPanelProps {
  onPress?: () => void;
  look?: InfoPanelLook.DEFAULT | InfoPanelLook.PADDED;
}

export enum InfoPanelLook {
  DEFAULT,
  PADDED,
}

const InfoPanel: React.FC<IInfoPanelProps> = ({
  onPress,
  children,
  look = InfoPanelLook.DEFAULT,
}) => (
  <Wrapper onPress={onPress} activeOpacity={onPress ? 0.8 : 1} look={look}>
    {children}
  </Wrapper>
);

export default InfoPanel;
