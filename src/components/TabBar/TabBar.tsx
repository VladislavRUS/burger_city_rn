import React from 'react';

import { Colors } from '../../constants/Colors';
import { Text } from '../Text';
import { IconWrapper, Wrapper } from './TabBar.styles';

interface ITabBarProps {
  icon: React.ElementType;
  title: string;
  isFocused: boolean;
}

const TabBar: React.FC<ITabBarProps> = ({ icon, title, isFocused }) => {
  const Icon = icon;
  const color = isFocused ? Colors.MAIN_COLOR : Colors.DARK_ICON_COLOR;

  return (
    <Wrapper>
      <IconWrapper>{<Icon color={color} />}</IconWrapper>
      <Text fontSize={10} fontWeight={600} color={color}>
        {title}
      </Text>
    </Wrapper>
  );
};

export default TabBar;
