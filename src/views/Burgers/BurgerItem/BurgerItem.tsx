import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { FastImageSource } from 'react-native-fast-image';
import ChevronIcon from '../../../components/Icons/ChevronIcon/ChevronIcon';
import { Text } from '../../../components/Text';
import { Colors } from '../../../constants/Colors';
import Burger from '../../../models/Burger';
import {
  ChevronWrapper,
  Image,
  InfoWrapper,
  NameWrapper,
  PriceWrapper,
  Wrapper,
} from './BurgerItem.styles';

interface IBurgerProps {
  burger: Burger;
  onPress: (burger: Burger) => void;
}

class BurgerItem extends React.PureComponent<IBurgerProps> {
  public render() {
    const { burger } = this.props;

    return (
      <Wrapper onPress={this.onPress}>
        <Image source={burger.imageUrl as FastImageSource} />
        <InfoWrapper>
          <NameWrapper>
            <Text fontSize={14} fontWeight={700} color={Colors.DARK_ICON_COLOR}>
              {burger.keyName}
            </Text>
          </NameWrapper>
          <PriceWrapper>
            <Text fontSize={13} fontWeight={700} color={Colors.MAIN_COLOR}>
              {burger.price}$
            </Text>
          </PriceWrapper>
        </InfoWrapper>
        <ChevronWrapper>
          <ChevronIcon />
        </ChevronWrapper>
      </Wrapper>
    );
  }

  private onPress = () => {
    const { burger, onPress } = this.props;
    onPress(burger);
  };
}

export default BurgerItem;
