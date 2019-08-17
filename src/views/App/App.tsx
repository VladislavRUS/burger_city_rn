import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  NavigationInjectedProps,
  NavigationScreenProps,
} from 'react-navigation';
import BurgerIcon from '../../components/Icons/BurgerIcon/BurgerIcon';
import { HomeIcon } from '../../components/Icons/HomeIcon';
import { TabBar } from '../../components/TabBar';
import { Routes } from '../../constants/Routes';
import { Burgers } from '../Burgers';
import Cart from '../Cart/Cart';
import Customize from '../Customize/Customize';
import DeliveryDetails from '../DeliveryDetails/DeliveryDetails';
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

const commonStack = {
  [Routes.CUSTOMIZE]: {
    screen: Customize,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
  [Routes.CART]: {
    screen: Cart,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
  [Routes.DELIVERY_DETAILS]: {
    screen: DeliveryDetails,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
};

const HomeNavigator = createStackNavigator(
  {
    [Routes.HOME]: {
      screen: Home,
    },
    ...commonStack,
  },
  stackNavigatorOptions,
);

HomeNavigator.navigationOptions = ({ navigation }: { navigation: any }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarOptions,
    tabBarVisible,
    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <TabBar isFocused={focused} title={'Home'} icon={HomeIcon} />
    ),
  };
};

const BurgersNavigator = createStackNavigator(
  {
    [Routes.BURGERS]: {
      screen: Burgers,
    },
    ...commonStack,
  },
  stackNavigatorOptions,
);

BurgersNavigator.navigationOptions = ({ navigation }: { navigation: any }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarOptions,
    tabBarVisible,
    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <TabBar isFocused={focused} title={'Our Burgers'} icon={BurgerIcon} />
    ),
  };
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
