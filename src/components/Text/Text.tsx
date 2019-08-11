import React from 'react';
import { StyledText } from './Text.styles';

interface ITextProps {
  fontSize?: number;
  fontWeight?: number;
  color?: string;
}

const Text: React.FC<ITextProps> = ({
  fontSize = 14,
  fontWeight = 400,
  color = '#000',
  children,
}) => (
  <StyledText fontSize={fontSize} fontWeight={fontWeight} color={color}>
    {children}
  </StyledText>
);

export default Text;
