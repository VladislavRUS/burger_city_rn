import React from 'react';
import { Colors } from '../../constants/Colors';
import { StyledText } from './Text.styles';

interface ITextProps {
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  isCentered?: boolean;
}

const Text: React.FC<ITextProps> = ({
  fontSize = 14,
  fontWeight = 400,
  color = Colors.MAIN_DARK_COLOR,
  isCentered = false,
  children,
}) => (
  <StyledText
    fontSize={fontSize}
    fontWeight={fontWeight}
    color={color}
    isCentered={isCentered}
  >
    {children}
  </StyledText>
);

export default Text;
