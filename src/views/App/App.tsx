import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import BurgerIcon from '../../components/Icons/BurgerIcon/BurgerIcon';
import { HomeIcon } from '../../components/Icons/HomeIcon';
import { TabBar } from '../../components/TabBar';
import { Routes } from '../../constants/Routes';
import { Burgers } from '../Burgers';
import { Home } from '../Home';
import { Start } from '../Start';

const tabBarOptions = {
  showLabel: false,
  style: {
    height: 87,
  },
};

const stackNavigatorOptions = {
  cardStyle: {
    backgroundColor: 'rgb(245, 245, 247)',
  },
};

const HomeNavigator = createStackNavigator(
  {
    [Routes.HOME]: {
      screen: Home,
    },
  },
  stackNavigatorOptions,
);

HomeNavigator.navigationOptions = {
  tabBarOptions,
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <TabBar isFocused={focused} title={'Home'} icon={HomeIcon} />
  ),
};

const BurgersNavigator = createStackNavigator(
  {
    [Routes.BURGERS]: {
      screen: Burgers,
    },
  },
  stackNavigatorOptions,
);

BurgersNavigator.navigationOptions = {
  tabBarOptions,
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <TabBar isFocused={focused} title={'Our Burgers'} icon={BurgerIcon} />
  ),
};

const MainNavigator = createBottomTabNavigator({
  [Routes.HOME_NAVIGATOR]: {
    screen: HomeNavigator,
  },
  [Routes.BURGERS_NAVIGATOR]: {
    screen: BurgersNavigator,
  },
});

const AppNavigator = createSwitchNavigator(
  {
    [Routes.START]: {
      screen: Start,
    },
    [Routes.MAIN_NAVIGATOR]: {
      screen: MainNavigator,
    },
  },
  {
    initialRouteName: Routes.MAIN_NAVIGATOR,
  },
);

export default createAppContainer(AppNavigator);
