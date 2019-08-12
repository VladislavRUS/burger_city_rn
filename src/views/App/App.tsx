import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { Routes } from '../../constants/Routes';
import Burgers from '../Burgers/Burgers';
import { Home } from '../Home';
import { Start } from '../Start';

const HomeNavigator = createStackNavigator({
  [Routes.HOME]: {
    screen: Home,
  },
});

HomeNavigator.navigationOptions = {
  tabBarLabel: 'Home',
};

const BurgersNavigator = createStackNavigator({
  [Routes.BURGERS]: {
    screen: Burgers,
  },
});

BurgersNavigator.navigationOptions = {
  tabBarLabel: 'Burgers',
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
    initialRouteName: Routes.START,
  },
);

export default createAppContainer(AppNavigator);
