import React from 'react';

import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Colors } from '../../constants/Colors';
import { Text } from '../Text';
import { IconWrapper, Wrapper } from './TabBar.styles';

interface ITabBarProps {
  icon: React.ElementType;
  titleKey: string;
  isFocused: boolean;
}

const TabBar: React.FC<ITabBarProps & InjectedIntlProps> = ({
  icon,
  titleKey,
  isFocused,
  intl,
}) => {
  const Icon = icon;
  const color = isFocused ? Colors.MAIN_COLOR : Colors.DARK_ICON_COLOR;

  return (
    <Wrapper>
      <IconWrapper>{<Icon color={color} />}</IconWrapper>
      <Text fontSize={10} fontWeight={600} color={color}>
        {intl.formatMessage({ id: titleKey })}
      </Text>
    </Wrapper>
  );
};

export default injectIntl(TabBar);
