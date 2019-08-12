import React from 'react';
import Logo from '../Logo/Logo';
import { Text } from '../Text';
import { TextsWrapper, Wrapper } from './Sticker.styles';

interface IStickerProps {
  onPress: () => void;
  title: string;
  subtitle: string;
}

const Sticker: React.FC<IStickerProps> = ({ onPress, title, subtitle }) => (
  <Wrapper onPress={onPress}>
    <Logo width={42} height={51} />
    <TextsWrapper>
      <Text fontSize={20} fontWeight={700} color={'#fff'}>
        {title}
      </Text>
      <Text fontSize={12} fontWeight={700} color={'#fff'}>
        {subtitle}
      </Text>
    </TextsWrapper>
  </Wrapper>
);

export default Sticker;
