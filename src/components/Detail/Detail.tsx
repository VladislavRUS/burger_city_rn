import React from 'react';
import InfoPanel, { InfoPanelLook } from '../InfoPanel/InfoPanel';
import { Text } from '../Text/index';
import {
  IconWrapper,
  InfoPanelWrapper,
  SubtitleWrapper,
  TitleWrapper,
  Wrapper,
} from './Detail.styles';

interface IDetailProps {
  title: string;
  subtitle?: string;
  panelText: string;
  onPress: () => void;
  icon: React.ReactNode;
}

const Detail: React.FC<IDetailProps> = ({
  title,
  subtitle,
  panelText,
  onPress,
  icon,
}) => (
  <Wrapper>
    <TitleWrapper>
      <Text fontSize={20} fontWeight={700}>
        {title}
      </Text>
    </TitleWrapper>

    {subtitle && (
      <SubtitleWrapper>
        <Text>{subtitle}</Text>
      </SubtitleWrapper>
    )}

    <InfoPanelWrapper>
      <InfoPanel onPress={onPress} look={InfoPanelLook.PADDED}>
        <Text fontSize={13} fontWeight={600}>
          {panelText}
        </Text>
        <IconWrapper>{icon}</IconWrapper>
      </InfoPanel>
    </InfoPanelWrapper>
  </Wrapper>
);

export default Detail;
