import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Routes } from '../../constants/Routes';
import Burger from '../../models/Burger';
import { Store } from '../../store';
import Mock from '../../store/Mock';
import { BurgerItem } from './BurgerItem';
import { BurgerItemWrapper, List, Wrapper } from './Burgers.styles';

class Burgers extends React.Component<NavigationScreenProps> {
  public static navigationOptions = {
    title: 'Burger City',
  };

  public render() {
    return (
      <Wrapper>
        <List
          contentContainerStyle={{ padding: 20 }}
          data={Mock.burgers}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </Wrapper>
    );
  }

  private keyExtractor = (item: any) => (item as Burger).id.toString();

  private renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <BurgerItemWrapper isLast={index === Mock.burgers.length - 1}>
        <BurgerItem burger={item} onPress={this.onBurgerPress} />
      </BurgerItemWrapper>
    );
  };

  private onBurgerPress = (burger: Burger) => {
    Store.setCurrentBurger(burger);
    const { navigation } = this.props;
    navigation.navigate(Routes.CUSTOMIZE);
  };
}

export default Burgers;
