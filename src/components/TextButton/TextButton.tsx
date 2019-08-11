import React from 'react';
import { Text } from '../Text';
import { Wrapper } from './TextButton.styles';

interface ITextButtonProps {
  onPress: () => void;
}

const TextButton: React.FC<ITextButtonProps> = ({ onPress, children }) => (
  <Wrapper onPress={onPress}>
    <Text fontSize={12} fontWeight={600} color={'rgba(255, 255, 255, 0.6)'}>
      {children}
    </Text>
  </Wrapper>
);

export default TextButton;
