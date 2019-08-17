import React from 'react';
import PencilIcon from '../../../components/Icons/PencilIcon/PencilIcon';
import InfoPanel, {
  InfoPanelLook,
} from '../../../components/InfoPanel/InfoPanel';
import { Text } from '../../../components/Text';
import {
  IconWrapper,
  InfoPanelTextWrapper,
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
}

const Detail: React.FC<IDetailProps> = ({
  title,
  subtitle,
  panelText,
  onPress,
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
        <IconWrapper>
          <PencilIcon />
        </IconWrapper>
      </InfoPanel>
    </InfoPanelWrapper>
  </Wrapper>
);

export default Detail;
