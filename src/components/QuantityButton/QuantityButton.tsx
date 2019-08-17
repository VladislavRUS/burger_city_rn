import React from 'react';

import { Content, RoundWrapper } from './QuantityButton.styles';

import { Colors } from '../../constants/Colors';
import InfoPanel, { InfoPanelLook } from '../InfoPanel/InfoPanel';
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
  <InfoPanel look={InfoPanelLook.PADDED}>
    <Content>
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
    </Content>
  </InfoPanel>
);

export default QuantityButton;
