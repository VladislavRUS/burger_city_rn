import React from 'react';

import { RoundWrapper, Wrapper } from './QuantityButton.styles';

import { Colors } from '../../constants/Colors';
import { Text } from '../Text';

interface IQuantityButtonProps {
  quantity: number;
  onDec: () => void;
  onInc: () => void;
}

const QuantityButton: React.FC<IQuantityButtonProps> = ({
  quantity,
  onDec,
  onInc,
}) => (
  <Wrapper>
    <RoundWrapper onPress={onDec}>
      <Text color={Colors.DARK_ICON_COLOR} fontSize={16}>
        -
      </Text>
    </RoundWrapper>
    <Text fontSize={15} fontWeight={600} color={Colors.DARK_ICON_COLOR}>
      {quantity}
    </Text>
    <RoundWrapper onPress={onInc}>
      <Text color={Colors.DARK_ICON_COLOR} fontSize={16}>
        +
      </Text>
    </RoundWrapper>
  </Wrapper>
);

export default QuantityButton;
